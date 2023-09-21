
function TodoList({ children }) {
  return (
    <ul>
      {children}
    </ul>
  );
}

export { TodoList };

/* chilren es lo mismo que props.children */
/* En App.js al haber tag apertura y cierre lo de adentro se renderiza en children (en este caso el TodoList.js) */
