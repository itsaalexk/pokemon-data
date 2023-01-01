export interface ListResponse {
    count:    number;
    next:     string;
    previous?: string;
    results:  Result[];
}

export interface Result {
    name: string;
    url:  string;
    id:   string | number ;
    image: string;
}
