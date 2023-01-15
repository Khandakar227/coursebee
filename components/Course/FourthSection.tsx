import { ReactNode } from "react"

export default function FourthSection() {
    return (
        <section className="py-[120px]">
            <h2 className="font-anek_bangla font-semibold text-center pb-10 text-[31px] leading-10 mb-6">কোর্সটি যেভাবে চলবে</h2>
            <div className="flex items-stretch justify-center flex-wrap gap-6 max-w-6xl mx-auto item">
                <div className="flex flex-col gap-6 justify-between">
                    <Card number="১" content="Interdum velit lorem id amet, maecenas dapibus tristique purus faucibus. Sit posuere libero luctus massa hendrerit id eros faucibus montes. Elit ac nam malesuada pharetra varius. Pharetra faucibus lacus, tellus ut ultricies. In viverra porta vulputate magnis suspendisse a." />
                    <Card number="২" content="Viverra nulla amet, ut vitae, tortor, id diam duis. Sapien vestibulum, sollicitudin arcu dui ipsum vel non. Et massa morbi volutpat eget potenti varius. Cursus eget sit ornare elementum suspendisse. Enim dignissim fringilla congue aliquam sed nunc. Nulla nulla nec eu ut fermentum mauris lectus. Vel pulvinar dui nec diam." />
                </div>
                <div className="flex flex-col gap-6 justify-between">
                    <Card number="৩" content="Ultricies vitae vulputate auctor nulla id risus quis vivamus justo. Adipiscing lorem tincidunt id sed. Dui amet integer semper eleifend nibh sed enim." />
                    <Card number="৪" content={<>Et tristique vel porttitor interdum amet lacus, integer orci. Nunc quis elementum pellentesque euismod morbi. Arcu ac sagittis massa diam. Risus tortor senectus semper interdum. Justo turpis tellus ipsum volutpat nibh cras elit quam id.
                        <br />
                        <br />
                        Ac non dignissim ut sed habitasse massa nibh. Aliquam est praesent orci, sed laoreet risus faucibus. Pretium sed bibendum morbi at.
                        Non elit elit lacus mi sociis velit. Mauris lobortis arcu dapibus. </>} />
                </div>
                <div className="flex flex-col gap-6 justify-between">
                    <Card number="৫" content="Interdum velit lorem id amet, maecenas dapibus tristique purus faucibus. Sit posuere libero luctus massa hendrerit id eros faucibus montes. Elit ac nam malesuada pharetra varius. Pharetra faucibus lacus, tellus ut ultricies. In viverra porta vulputate magnis suspendisse a." />
                    <Card number="৬" content="Quis ultrices fusce elementum quam. Feugiat ac risus scelerisque mi semper enim diam sagittis. Consectetur eget suscipit in nulla tincidunt vestibulum tellus. Iaculis sit donec libero velit. Malesuada feugiat ullamcorper magna odio ipsum. Erat arcu enim dui integer venenatis, tellus. At gravida auctor dictum pellentesque placerat at donec tellus." />
                </div>
            </div>
        </section>
    )
}

const Card = ({ number, content }: { number: string, content: ReactNode }) => {
    return (
        <>
            <div className="flex gap-4 items-start p-6 shadow-lg rounded-xl max-w-[328px]">
                <span className="text-xl w-full max-w-[32px] h-8 rounded-full bg-secondary-50 text-secondary-500 text-center"> {number} </span>
                <p className="font-inter leading-6">{content}</p>
            </div>
        </>
    )
}