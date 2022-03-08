import { useEffect, useState } from "react";

export const Message = () => {
  const initialState = {
    x: 0,
    y: 0,
  };
  const [corrs, setCorrs] = useState(initialState);
  useEffect(() => {
    const mouseMove = (e) => {
      const { x, y } = e;
      console.log("Esto vale e ", x, y);
      console.log(":D");
      setCorrs({
        x,
        y,
      });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      console.log("componente desmontado");
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div>
      <h3>Eres genial</h3>
      <p>Esto valen las coordenadas</p>
      <span> X: {corrs.x}</span>
      <span> Y: {corrs.y}</span>
    </div>
  );
};
