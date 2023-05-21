import dayjs from "dayjs";
import relativeTime from  "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export default function Card({children, title, date, colors}: {children: React.ReactNode, title: string, date: string, colors: Array<string>;}) {
 
const formattedDate: string =dayjs().to(dayjs(date));

  return (
    <div className={`${colors[0]} p-8 md:pt-16 md:p-12 flex flex-col justify-end h-full relative`}>
      <h2 className="text-light text-3xl md:text-4xl max-w-[15rem] mb-4">{title}</h2>
      <p className="md:text-lg">{children}</p>
      <p className={`${colors[1]} w-fit text-sm pt-2 pb-1 px-4 rounded-full absolute top-8 right-4`}>{formattedDate}</p>
    </div>
  );
}