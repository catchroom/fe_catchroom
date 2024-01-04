'use client';
import Header from '@/components/common/header';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

type SignupData = {
  email: string;
  password: string;
  passwordCheck: string;
};

const Page = () => {
  const router = useRouter();
  const [state, setState] = useState<SignupData>({
    email: '',
    password: '',
    passwordCheck: '',
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupData>();

  const onSubmit = (data: SignupData) => {
    setState(data);
    console.log(state);
  };

  return (
    <div className="w-[350px] mr-10 pr-10">
      <Header title="이메일로 회원가입(1/2)" showBackButton />
      <div className="w-full h-full flex flex-col px-5 mt-5 items-center bg-primary">
        <div className="flex w-screen h-screen mx-auto">
          <form
            className="w-[450px] flex flex-col gap-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              placeholder="이메일"
              {...register('email', {
                required: '이메일과 비밀번호를 입력하세요.',
              })}
              className="w-[350px] h-[52px] border-2 gap-6 border-gray-400 focus:border-pink-700 mb-2 flex flex-col items-start self-stretch rounded-md"
            />

            <input
              placeholder="비밀번호"
              {...register('password', {
                required: '이메일과 비밀번호를 입력해주세요.',
              })}
              className="w-[350px] h-[52px] border-2 gap-2 border-gray-400 focus:border-pink-700 mb-2 flex flex-col items-start  rounded-md"
            />
            <div className="text-gray-600 text-p2">
              영문+숫자+특수문자 8~20자리
            </div>
            <input
              placeholder="비밀번호 재입력"
              {...register('passwordCheck', {
                required: '이메일과 비밀번호를 입력해주세요.',
              })}
              className="w-[350px] h-[52px] border-2 gap-2 border-gray-400 focus:border-pink-700 mb-2 flex flex-col items-start  rounded-md"
            />

            {errors.password && <p>{errors.password.message}</p>}

            <button
              className="w-[350px] h-[52px] bg-focus  font-pretend text-t2 font-medium text-text-on rounded-md mt-7"
              type="submit"
              onClick={() => {
                router.push('/signup/next');
              }}
            >
              다음
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;