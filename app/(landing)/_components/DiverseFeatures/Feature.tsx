// TODO refactor this component
import React from "react";

interface FeatureProps {
  title: string;
  description: string;
  onMouseEnter?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const Feature = ({
  title,
  description,
  onMouseEnter,
  onMouseLeave,
}: FeatureProps) => {
  return (
    <div
      className="w-auto h-auto bg-stone-900 relative overflow-hidden transition duration-300 group mb-6"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex flex-col p-6 relative z-10">
        <h1 className="text-white text-3xl font-semibold mb-4">{title}</h1>
        <p className="text-gray-400 text-2xl font-semibold">{description}</p>
      </div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 border-[2px] border-gradient rounded-3xl transition duration-300 delay-300 opacity-0 group-hover:opacity-100"></div>
      </div>
    </div>
  );
};
