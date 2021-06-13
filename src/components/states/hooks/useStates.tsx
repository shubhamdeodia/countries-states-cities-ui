import { useQuery } from 'react-query';
import { axiosInstance } from '../../../axiosInstance';
import { pageSize, queryKeys } from '../../../react-query/constants';
import { IQueryParams } from '../../../models/common';
import { IState } from '../../../models/state';

async function getStates({
    pageNumber = 0,
    limit = pageSize,
    selectedCountryCode,
    searchQuery
}: IQueryParams): Promise<IState[]> {
    let url = `/states?country_code=${selectedCountryCode}&_page=${pageNumber}&_limit=${limit}`;

    if (searchQuery) {
        url = `/states?country_code=${selectedCountryCode}&name=${searchQuery}&_page=${pageNumber}&_limit=${limit}`;
    }

    const { data } = await axiosInstance.get(url);
    return data;
}

export function useStates({
    pageNumber = 0,
    limit = pageSize,
    selectedCountryCode,
    searchQuery
}: IQueryParams): {
    data: IState[];
    isFetching: boolean;
} {
    const fallback: IState[] = [];

    const { data = fallback, isFetching } = useQuery(
        [queryKeys.states, selectedCountryCode, searchQuery],
        () =>
            getStates({
                pageNumber,
                limit,
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
