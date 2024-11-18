import { SquareChevronLeft, SquareChevronRight } from "lucide-react";
import { useState } from "react";
import * as Icons from "react-feather";

interface Props {
    rowsInOnePage: number
    columnsInOnePage: number
    iconHeight: number
    iconWidth: number
    pickerHeight: number
    pickerWidth: number
    onSelectIcon: (value: any) => void
}

export default function Picker({
    rowsInOnePage,
    columnsInOnePage,
    iconHeight,
    iconWidth,
    pickerHeight = 500,
    pickerWidth = 500,
    onSelectIcon,
}: Props) {

    const iconsArray = Object.keys(Icons); // Get all icon names from Feather icons
    const iconsPerPage = rowsInOnePage * columnsInOnePage;
    const totalPages = Math.ceil(iconsArray.length / iconsPerPage);
  
    const [currentPage, setCurrentPage] = useState(1);
  
    const handleIconClick = (iconName: any) => {
      onSelectIcon(iconName); 
    };
  
    const handleNextPage = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const handlePrevPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    // Calculate icons to display on the current page
    const startIndex = (currentPage - 1) * iconsPerPage;
    const iconsToShow = iconsArray.slice(startIndex, startIndex + iconsPerPage);
  
    return (
      <div style={{ height: pickerHeight, width: pickerWidth }} className="mt-5 flex flex-col overflow-hidden">
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${columnsInOnePage}, 1fr)`, gap: "10px" }}>
          {iconsToShow.map((iconName, index) => {
            const IconComponent = Icons[iconName];
            return (
              <div
                key={index}
                onClick={() => handleIconClick(iconName)}
                className="hover:bg-slate-300 rounded flex justify-center items-center cursor-pointer "
                style={{
                  width: iconWidth,
                  height: iconHeight,
                }}
              >
                <IconComponent size={Math.min(iconWidth, iconHeight) * 0.8} />
              </div>
            );
          })}
        </div>
        <div className="flex justify-between my-10 ">
          <button onClick={handlePrevPage} disabled={currentPage === 1} className="text-md font-medium hover:underline underline-offset-4">
            Prev
          </button>
          <span className="text-xl font-semibold">Page {currentPage} of {totalPages}</span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages} className="text-md font-medium hover:underline underline-offset-4">
          Next
          </button> 
        </div>
      </div>
    );
}

