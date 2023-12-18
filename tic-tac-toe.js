const draggableList = document.querySelectorAll('.draggable');
const dropzoneList = document.querySelectorAll('.dropzone');

draggableList.forEach(draggable => {
  draggable.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', draggable.id);
  });
});

dropzoneList.forEach(dropzone => {
  dropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');
    const draggedElement = document.getElementById(data);

    if (draggedElement) {
      dropzone.appendChild(draggedElement);
      draggedElement.style.transform = 'none';
    }
  });
});

document.getElementById('reloadButton').addEventListener('click', () => {
  location.reload();
});
