export interface ListSelection {
  selectedItems: any[];

  totalItems: any[];

  select(item: any): void;

  selectAll(): void;

  unselect(item: any): void;

  isSelected(item: any): boolean;
}

export class ListSelectionImpl implements ListSelection {
  private _selectedItems: any[] = [];

  constructor(public readonly totalItems: any[]) {}

  select(item: any): void {
    if (!this.isSelected(item)) {
      this._selectedItems.push(item);
    }
  }

  selectAll(): void {
    this._selectedItems = this.totalItems;
  }

  unselect(item: any): void {
    if (!this.isSelected(item)) {
      throw new Error(`Cannot unselect an item that is not selected`);
    }

    this._selectedItems = this._selectedItems.filter(e => e !== item);
  }

  isSelected(item: any): boolean {
    return !!this._selectedItems.find(e => e === item);
  }

  get selectedItems(): any[] {
    return this._selectedItems;
  }
}
