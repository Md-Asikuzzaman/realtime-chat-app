"use client";

import { NextPage } from "next";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, UseFormSetValue } from "react-hook-form";

interface Props {
  setValue: UseFormSetValue<{
    message: string;
  }>;
  message: string;
  emojiPlate: boolean;
}

const EmojiPlate: NextPage<Props> = ({ setValue, emojiPlate, message }) => {
  // setting value with emoji
  const handleEmoji = (emoji: string) => {
    setValue("message", message + emoji);
  };

  return (
    <AnimatePresence>
      {emojiPlate && (
        <motion.div
          initial={{
            opacity: 0,
            y: -70,
          }}
          animate={{
            opacity: 1,
            y: -140,
          }}
          exit={{
            opacity: 0,
            y: -70,
          }}
          transition={{
            ease: "backInOut",
          }}
          className="absolute right-5 z-50 grid grid-cols-8  gap-1 rounded-xl bg-white p-3 shadow-lg sm:right-10 sm:top-0 sm:grid-cols-12"
        >
          <span
            onClick={() => handleEmoji("👋")}
            className="cursor-pointer select-none text-2xl"
          >
            👋
          </span>
          <span
            onClick={() => handleEmoji("😆")}
            className="cursor-pointer select-none text-2xl"
          >
            😆
          </span>
          <span
            onClick={() => handleEmoji("😁")}
            className="cursor-pointer select-none text-2xl"
          >
            😁
          </span>
          <span
            onClick={() => handleEmoji("🤣")}
            className="cursor-pointer select-none text-2xl"
          >
            🤣
          </span>
          <span
            onClick={() => handleEmoji("😅")}
            className="cursor-pointer select-none text-2xl"
          >
            😅
          </span>
          <span
            onClick={() => handleEmoji("🥰")}
            className="cursor-pointer select-none text-2xl"
          >
            🥰
          </span>
          <span
            onClick={() => handleEmoji("😍")}
            className="cursor-pointer select-none text-2xl"
          >
            😍
          </span>
          <span
            onClick={() => handleEmoji("😵")}
            className="cursor-pointer select-none text-2xl"
          >
            😵
          </span>
          <span
            onClick={() => handleEmoji("🤔")}
            className="cursor-pointer select-none text-2xl"
          >
            🤔
          </span>
          <span
            onClick={() => handleEmoji("🤭")}
            className="cursor-pointer select-none text-2xl"
          >
            🤭
          </span>
          <span
            onClick={() => handleEmoji("🤐")}
            className="cursor-pointer select-none text-2xl"
          >
            🤐
          </span>
          <span
            onClick={() => handleEmoji("🥴")}
            className="cursor-pointer select-none text-2xl"
          >
            🥴
          </span>
          <span
            onClick={() => handleEmoji("🤧")}
            className="cursor-pointer select-none text-2xl"
          >
            🤧
          </span>
          <span
            onClick={() => handleEmoji("🤒")}
            className="cursor-pointer select-none text-2xl"
          >
            🤒
          </span>
          <span
            onClick={() => handleEmoji("🤥")}
            className="cursor-pointer select-none text-2xl"
          >
            🤥
          </span>
          <span
            onClick={() => handleEmoji("🥵")}
            className="cursor-pointer select-none text-2xl"
          >
            🥵
          </span>
          <span
            onClick={() => handleEmoji("🤯")}
            className="cursor-pointer select-none text-2xl"
          >
            🤯
          </span>
          <span
            onClick={() => handleEmoji("🤪")}
            className="cursor-pointer select-none text-2xl"
          >
            🤪
          </span>
          <span
            onClick={() => handleEmoji("😜")}
            className="cursor-pointer select-none text-2xl"
          >
            😜
          </span>
          <span
            onClick={() => handleEmoji("😎")}
            className="cursor-pointer select-none text-2xl"
          >
            😎
          </span>
          <span
            onClick={() => handleEmoji("🤓")}
            className="cursor-pointer select-none text-2xl"
          >
            🤓
          </span>
          <span
            onClick={() => handleEmoji("🧐")}
            className="cursor-pointer select-none text-2xl"
          >
            🧐
          </span>
          <span
            onClick={() => handleEmoji("🥳")}
            className="cursor-pointer select-none text-2xl"
          >
            🥳
          </span>
          <span
            onClick={() => handleEmoji("🤔")}
            className="cursor-pointer select-none text-2xl"
          >
            🤔
          </span>
          <span
            onClick={() => handleEmoji("🤫")}
            className="cursor-pointer select-none text-2xl"
          >
            🤫
          </span>
          <span
            onClick={() => handleEmoji("🤑")}
            className="cursor-pointer select-none text-2xl"
          >
            🤑
          </span>
          <span
            onClick={() => handleEmoji("🤕")}
            className="cursor-pointer select-none text-2xl"
          >
            🤕
          </span>
          <span
            onClick={() => handleEmoji("👍")}
            className="cursor-pointer select-none text-2xl"
          >
            👍
          </span>
          <span
            onClick={() => handleEmoji("👊")}
            className="cursor-pointer select-none text-2xl"
          >
            👊
          </span>
          <span
            onClick={() => handleEmoji("👆")}
            className="cursor-pointer select-none text-2xl"
          >
            👆
          </span>
          <span
            onClick={() => handleEmoji("👇")}
            className="cursor-pointer select-none text-2xl"
          >
            👇
          </span>
          <span
            onClick={() => handleEmoji("👉")}
            className="cursor-pointer select-none text-2xl"
          >
            👉
          </span>
          <span
            onClick={() => handleEmoji("👈")}
            className="cursor-pointer select-none text-2xl"
          >
            👈
          </span>
          <span
            onClick={() => handleEmoji("🖤")}
            className="cursor-pointer select-none text-2xl"
          >
            🖤
          </span>
          <span
            onClick={() => handleEmoji("🤍")}
            className="cursor-pointer select-none text-2xl"
          >
            🤍
          </span>
          <span
            onClick={() => handleEmoji("🧡")}
            className="cursor-pointer select-none text-2xl"
          >
            🧡
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EmojiPlate;
