import { useQuery } from 'react-query';

import { axiosInstance } from '../../../axiosInstance';
import { pageSize, queryKeys } from '../../../react-query/constants';
import { IQueryParams } from '../../../models/common';
import { ICountries } from '../../../models/country';

async function getCountries({
    pageNumber = 0,
    limit = pageSize,
    searchQuery
}: IQueryParams): Promise<ICountries[]> {
    let url = `/countries?_page=${pageNumber}&_limit=${limit}`;

    if (searchQuery) {
        url = `/countries?q=${searchQuery}&_page=${pageNumber}&_limit=${limit}`;
    }

    const { data } = await axiosInstance.get(url);
    return data;
}

export function useCountries({
    pageNumber = 0,
    limit = pageSize,
    searchQuery
}: IQueryParams): {
    data: ICountries[];
    isFetching: boolean;
} {
    const fallback: ICountries[] = [];
    const { data = fallback, isFetching } = useQuery(
        [queryKeys.countries, searchQuery],
        () =>
            getCountries({
                pageNumber,
                limit,
                searchQuery
            }),
        {
            keepPreviousData: false
        }
    );

    return { data, isFetching };
}
