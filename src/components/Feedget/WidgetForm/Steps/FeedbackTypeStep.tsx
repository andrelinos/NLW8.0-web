import { feedbackTypes } from "../feedbackTypes";
import { FeedbackTypesProps } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackTypesProps) => void;
}

export function FeedbackTypeStep({
  onFeedbackTypeChanged,
}: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6 text-brand-green-500">
          Deixe seu feedback
        </span>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              type="button"
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-green-500 focus:border-brand-green-500 outline-none"
              onClick={() => onFeedbackTypeChanged(key as FeedbackTypesProps)}
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span className="text-brand-green-200">{value.title}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}
