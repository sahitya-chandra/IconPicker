import Picker from './Picker'
import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog'

export default function Iconsdialog({onSelectIcon}: {onSelectIcon: (value: any) => void}) {
  return (
    <div>
        <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Select Icons</DialogTitle>
          <DialogDescription>
            Choose any single Icon
          </DialogDescription>
        </DialogHeader>
        <Picker 
          rowsInOnePage={5}
          columnsInOnePage={5}
          iconHeight={50}
          iconWidth={50}
          pickerHeight={400}
          pickerWidth={400}
          onSelectIcon={onSelectIcon}
        />
        
        {/* <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
          </DialogClose>
        </DialogFooter> */}
      </DialogContent>
    </div>
  )
}

