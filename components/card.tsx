import dayjs from "dayjs";
import relativeTime from  "dayjs/plugin/relativeTime";
require('dayjs/locale/nl')
dayjs.extend(relativeTime);
dayjs.locale("nl")

export default function Card({children, title, date, colors}: {children: React.ReactNode, title: string, date: string, colors: Array<string>;}) {
 
const formattedDate: string =dayjs().to(dayjs(date));

  return (
    <div className={`${colors[0]} p-8 md:p-12 md:pt-14 flex flex-col justify-end h-full relative`}>
      <h2 className="text-light text-3xl md:text-4xl max-w-[15rem] mb-4">{title}</h2>
      <p className="md:text-lg">{children}</p>
      <p className={`${colors[1]} w-fit text-xs md:text-sm pt-2 pb-1 px-4 rounded-full absolute top-3 md:top-5 right-2 md:right-4`}>{formattedDate}</p>
    </div>
  );
}