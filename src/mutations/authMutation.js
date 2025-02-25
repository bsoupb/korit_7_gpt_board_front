import { useMutation } from "@tanstack/react-query";
import { joinApi, loginApi } from "../apis/authApi";

// useMutation(): 데이터를 변경하는 요청 (POST, PUT, DELETE 등) 을 처리
// 서버에 데이터를 변경하는 요청을 보낼 때 사용
// useQuery(): 데이터를 가져올 때 (GET 요청)
export const useJoinMutation = () => useMutation({
    mutationKey: ["joinMutation"],
    mutationFn: joinApi,
    retry: 0,       // 재요청 X
});

export const useLoginMutation = () => useMutation({
    mutationKey: ["loginMutation"],
    mutationFn: loginApi,
    retry: 0,
});