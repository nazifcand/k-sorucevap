import { FC, useEffect } from 'react';

interface IProps {
  open: boolean;
  onClose?: () => void;
}

const AskQuestionModal: FC<IProps> = ({ open = false, onClose }) => {
  useEffect(() => {
    const html = document.getElementsByTagName('html')[0];
    html.className = open ? 'overflow-hidden' : '';
  }, [open]);

  useEffect(() => {
    document.addEventListener('click', (event: Event): void => {
      console.log(event);
    });
  }, []);

  if (!open) return <></>;

  return (
    <>
      <div
        id="overlay"
        className="w-screen h-screen fixed top-0 left-0 z-[101] bg-black/60 flex items-center justify-center"
      >
        <div className="bg-white shadow-lg w-[25vw] border rounded-lg p-4 box-border flex flex-col">
          <div className="border-b flex items-center justify-between pb-2">
            <h3 className="font-bold">MODAL TITLE</h3>
            <i className="fas fa-times"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default AskQuestionModal;
