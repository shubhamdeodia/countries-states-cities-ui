import { useQuery } from 'react-query';
import { axiosInstance } from '../../../axiosInstance';
import { pageSize, queryKeys } from '../../../react-query/constants';
import { IQueryParams } from '../../../models/common';
import { ICity } from '../../../models/city';

async function getStates({
    pageNumber = 0,
    limit = pageSize,
    selectedCountryCode,
    selectedStateCode,
    searchQuery
}: IQueryParams): Promise<ICity[]> {
    let url = `/cities?country_code=${selectedCountryCode}&state_code=${selectedStateCode}&_page=${pageNumber}&_limit=${limit}`;
    if (searchQuery) {
        url = `/cities?country_code=${selectedCountryCode}&state_code=${selectedStateCode}&q=${searchQuery}&_page=${pageNumber}&_limit=${limit}`;
    }

    const { data } = await axiosInstance.get(url);
    return data;
}

export function useCities({
    pageNumber = 0,
    limit = pageSize,
    selectedStateCode,
    selectedCountryCode,
    searchQuery
}: IQueryParams): {
    data: ICity[];
    isFetching: boolean;
} {
    const fallback: ICity[] = [];

    const { data = fallback, isFetching } = useQuery(
        [queryKeys.cities, selectedStateCode, searchQuery],
        () =>
            getStates({
                pageNumber,
                limit,
                selectedStateCode,
                selectedCountryCode,
                searchQuery
            }),
        {
            keepPreviousData: false,
            refetchOnWindowFocus: false,
            staleTime: 5000
        }
    );

    return { data, isFetching };
}
