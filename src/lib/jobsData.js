import { LuGamepad } from "react-icons/lu";
import { TbWorldWww } from "react-icons/tb";
import { SiGamebanana } from "react-icons/si";

export const jobsList = [
    {
        id: 1,
        title: 'Game Developer',
        type: 'Full-time',
        description: 'We are looking for a software engineer to join our team. The ideal candidate will have experience in developing web applications using React and Node.js.',
        link: '/apply/software-engineer',
        altText: 'Software Engineer',
        seats: 3,
        // icon:<LuGamepad size={32}/>

    },
    {
        id: 2,
        title: 'Full Stack Web Developer',
        type: 'Full-time',
        description: 'We are looking for a product manager to join our team. The ideal candidate will have experience in managing product development teams and launching new products.',
        link: '/apply/product-manager',
        altText: 'Product Manager',
        seats: 2,
        // icon:<TbWorldWww size={32}/>
    },
    {
        id: 3,
        title: 'Game Designer',
        type: 'Full-time',
        description: 'We are looking for a data scientist to join our team. The ideal candidate will have experience in analyzing large datasets and building machine learning models.',
        link: '/apply/data-scientist',
        altText: 'Data Scientist',
        seats: 1,
        // icon:<SiGamebanana />
    }
]