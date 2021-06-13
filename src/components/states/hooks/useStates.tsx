import { useQuery } from 'react-query';
import { axiosInstance } from '../../../axiosInstance';
import { pageSize, queryKeys } from '../../../react-query/constants';
import { IQueryParams } from '../../../models/common';
import { IState } from '../../../models/state';

async function getStates({
    pageNumber = 0,
    limit = pageSize,
    selectedCountryCode
}: IQueryParams): Promise<IState[]> {
    const url = `/states?country_code=${selectedCountryCode}&_page=${pageNumber}&_limit=${limit}`;

    const { data } = await axiosInstance.get(url);
    return data;
}

export function useStates({
    pageNumber = 0,
    limit = pageSize,
    selectedCountryCode
}: IQueryParams): {
    data: IState[];
    isFetching: boolean;
} {
    const fallback: IState[] = [];

    const { data = fallback, isFetching } = useQuery(
        [queryKeys.states, selectedCountryCode],
        () =>
            getStates({
                pageNumber,
                limit,
                selectedCountryCode
            }),
        {
            keepPreviousData: false
        }
    );

    return { data, isFetching };
}
