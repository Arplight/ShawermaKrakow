import { filterBoardData } from "../../../../../Data/filter_board/Filter_board";

const FilterBoard = () => {
  return (
    <aside className="filter-board w-1/5 flex flex-col px-2 py-6 gap-2">
      <button className="full-button font-secondary ">Clear Filters</button>
      <div>
        <h3 className="font-primary mb-1">Sort By</h3>

        <ul className="flex flex-col gap-0.5">
          {filterBoardData[0].sortMenu.map((item, index) => (
            <li key={index}>
              <label
                htmlFor={item}
                className="small-paragrapgh font-primary flex items-center gap-[8px]"
              >
                <input type="radio" name="sort" id={item} />
                {item}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-primary mb-1">Filter By</h3>

        <div className="flex flex-col gap-1">
          <span>
            <h4 className="font-primary mb-0.5">Category</h4>
            <ul className="flex flex-col gap-0.5">
              {filterBoardData[0].categoryMenu.map((item, index) => (
                <li key={index}>
                  <label
                    htmlFor={item}
                    className="small-paragrapgh font-primary flex items-center gap-[8px]"
                  >
                    <input type="checkbox" name={item} id={item} />
                    {item}
                  </label>
                </li>
              ))}
            </ul>
          </span>
          <span>
            <label
              htmlFor="range"
              className="small-paragrapgh font-primary flex items-start flex-col w-full"
            >
              <h4 className="font-primary mb-0.5">Price:</h4>
              <input
                type="range"
                name="range"
                id="range"
                className="p-0 w-full"
              />
            </label>
          </span>
        </div>
      </div>
    </aside>
  );
};

export default FilterBoard;
