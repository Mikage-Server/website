import type { ItemProps } from './types';

const Item = ({ name, available }: ItemProps) => {
  return (
    <li className="p-6 mb-5 w-full border-2 border-gray-300 rounded-xl">
      <h2 className="mb-1 text-xl font-medium">
        {name}
      </h2>

      {available ? (
        <span className="text-emerald-500">
          接続できました
        </span>
      ) : (
        <span className="text-red-500">
          接続できませんでした
        </span>
      )}
    </li>
  );
};

export default Item;
