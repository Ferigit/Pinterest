interface IProps {
  tags: (string | undefined)[];
}

export const Tags: React.FC<IProps> = ({ tags }: IProps) => {
  return (
    <div className="flex overflow-x-auto space-x-4 pb-4 mt-2">
      {tags.map((item, index) => (
        <div
          key={index}
          className="bg-gray-100 flex justify-center items-center rounded-full text-sm px-2 py-1 flex-shrink-0 w-10 h-4 bg-gray-300 "
        >
          {item}
        </div>
      ))}
    </div>
  );
  return (
    <div className="flex justify-start items-center mt-2">
      {tags?.map((tag: string | undefined, index: number) => (
        <span
          className="inline-block bg-gray-100 rounded-full text-sm px-2 py-1"
          key={index}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};
