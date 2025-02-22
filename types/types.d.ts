// Format 2: Array data
export type DataArray<T> = T[];

// Format 3: Single object data
export type DataObject<T> = T;

export interface ApiResponse<T> {
  status: HttpStatusCode;
  message: string;
  data: T; // Data can be any structure
  app_name: string;
}

// Format 1: Paginated data
export interface DataPaginate<T> {
  total_item: number;
  page: number;
  item: T[];
  total_pages: number;
  links: Links;
}
