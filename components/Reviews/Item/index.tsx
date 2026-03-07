import Image from "@/components/Image";

type ItemProps = {
    item: any;
};

const Item = ({ item }: ItemProps) => {
    return (
        <div className="flex flex-col p-6 border border-greyscale-100 bg-greyscale-0 shadow-2 first:mb-8 first:-mr-[9.5rem] first:ml-[9.5rem] xl:first:mb-6">
            <div className="h-[8.4375rem] mb-3.5 font-medium line-clamp-5">
                “{item.content}”
            </div>
            <div className="flex items-center">
                <div className="shrink-0 w-10 h-10 mr-4">
                    <Image
                        className="w-full h-full object-cover rounded-full opacity-100"
                        src={item.avatar}
                        width={48}
                        height={48}
                        alt=""
                    />
                </div>
                <div className="grow">
                    <div className="mb-1.5 text-lg font-semibold">
                        {item.author}
                    </div>
                    <div className="text-base text-greyscale-400">
                        {item.position}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;
