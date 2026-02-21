import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

export default function Modal({ children, ref }) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 rounded shadow-md bg-stone-950 border-2 border-stone-50">
      {children}{" "}
      <form method="dialog" className="px-4 py-3 flex justify-end">
        <Button >Close</Button>
      </form>{" "}
    </dialog>,
    document.getElementById("modal-root"),
  );
}
