"use client";

import { useActionState } from "react";
import { login, type LoginState } from "@/lib/actions/auth";

const initialState: LoginState = { error: null };

export function LoginForm() {
  const [state, formAction, isPending] = useActionState(login, initialState);

  return (
    <form action={formAction} className="flex w-full max-w-sm flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="username" className="text-xs text-muted">
          아이디
        </label>
        <input
          id="username"
          name="username"
          type="text"
          required
          autoComplete="username"
          className="rounded-sm border border-ink/20 px-3 py-2 text-sm outline-none focus:border-ink"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="password" className="text-xs text-muted">
          비밀번호
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
          className="rounded-sm border border-ink/20 px-3 py-2 text-sm outline-none focus:border-ink"
        />
      </div>
      {state.error && (
        <p className="text-xs text-red-600">{state.error}</p>
      )}
      <button
        type="submit"
        disabled={isPending}
        className="mt-2 rounded-sm bg-ink py-2.5 text-sm text-white disabled:opacity-50"
      >
        {isPending ? "로그인 중..." : "로그인"}
      </button>
    </form>
  );
}
