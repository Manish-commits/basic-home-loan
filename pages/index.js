import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="w-full h-screen bg-gray-300 py-10">
      <h1 className="w-full uppercase text-center text-[36px] font-bold underline font-serif">Basic Home Loan </h1>
      <div className="w-full flex flex-col gap-10 my-10 items-center">
        <p className="text-[24px]">Click to get posts</p>
        <Button path={"/posts"} />
      </div>
    </div>
  );
}
