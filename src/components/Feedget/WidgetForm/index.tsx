import { useRef, useState } from "react";

import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { feedbackTypes } from "./feedbackTypes";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackTypeSuccessStep";
import Modal from "../../Modal/preview";
import ModalPreview from "../../Modal/preview";

export type FeedbackTypesProps = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [openModal, setOpenModal] = useState(false);
  const cancelButtonRefModal = useRef(null);

  const [feedbackType, setFeedbackType] = useState<FeedbackTypesProps | null>(
    null
  );
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div
      className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex ;
          flex-col justify-between items-center shadow-lg w-[calc(100vw-2rem)]
          h-[280px] md:w-auto border-2 border-brand-green-600"
    >
      {feedbackSent ? (
        <FeedbackSuccessStep
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              onFeedbackRestartRequested={handleRestartFeedback}
              feedbackType={feedbackType}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer className="flex text-xs text-neutral-400">
        Feito com 💜 por
        <a
          className="hover:text-brand-green-500 transition ml-1"
          href="https://github.com/andrelinos"
          title="Andrelino Silva"
          target="_blank"
        >
          Andrelino Silva
        </a>
      </footer>
    </div>
  );
}
