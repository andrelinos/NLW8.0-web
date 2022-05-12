import { FormEvent, useState } from "react";
import { ArrowLeft } from "phosphor-react";
import { FeedbackTypesProps } from "..";
import { CloseButton } from "../../CloseButton";
import { feedbackTypes } from "../feedbackTypes";
import { ScreenshotButton } from "../ScreenShotButton";
import { api } from "../../../services/api";
import { Loading } from "../../Loading";

interface FeedbackContentProps {
  feedbackType: FeedbackTypesProps;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
  onFeedbackSent,
}: FeedbackContentProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState("");
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  async function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();
    setIsSendingFeedback(true);

    await api.post("/feedbacks", {
      type: feedbackType,
      comment,
      screenshot,
    });

    setIsSendingFeedback(false);
    onFeedbackSent();
  }

  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute rounded-md border-transparent text-zinc-400 hover:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-green-500"
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight="bold" className="w-4 h4" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            src={feedbackTypeInfo?.image?.source}
            alt={feedbackTypeInfo?.image?.alt}
            className="w=6 h-6"
          />
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>
      <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-100 bg-transparent rounded-md focus:border-brand-green-500 focus:ring-brand-green-500 focus:ring-1 focus:outline-none resize-none  scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin "
          placeholder="Conte com detalhes o que está acontecendo..."
          onChange={(event) => setComment(event.target.value)}
        />

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />
          <button
            type="submit"
            disabled={!comment.length || isSendingFeedback}
            className="p-2 bg-brand-purple-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-purple-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-pruple-500 transition disabled:opacity-50 disabled:hover:bg-brand-purple-500"
          >
            {isSendingFeedback ? <Loading /> : " Enviar feedback"}
          </button>
        </footer>
      </form>
    </>
  );
}
