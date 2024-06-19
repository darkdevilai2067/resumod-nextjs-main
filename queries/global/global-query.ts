import {
    useQuery,
    useMutation,
    useQueryClient,
} from '@tanstack/react-query'

import { getGlobalSettings, postRequestACall } from "./global-service";

const queryKey = "global";

export const useSettings = () => {
    return useQuery({
        queryKey: [queryKey],
        queryFn: getGlobalSettings,
    });
};

export const useRequestCall = () => {
    // const queryClient = useQueryClient();
    return useMutation({
        mutationFn: postRequestACall,

        // onSuccess: () => {
        //     queryClient.invalidateQueries({
        //         queryKey: ["global"],
        //     });
        // },
    });
};