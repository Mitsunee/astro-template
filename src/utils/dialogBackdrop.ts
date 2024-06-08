export function attachDialogCloseEvent(ref?: HTMLDialogElement) {
  const dialog =
    ref ?? (document.getElementById("modal-dialog") as HTMLDialogElement);
  dialog.addEventListener("click", ev => {
    if (ev.target === dialog) dialog.close();
  });
}
