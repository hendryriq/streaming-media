import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Flickity from 'react-flickity-component';
import FeaturedMovie from '@/Components/FeaturedMovie';

export default function Dashboard(props) {
    const flickityOptions = {
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        prevNextButtons: false,
        pageDots: false,
    };
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div>
                <div className="font-semibold text-[22px] text-black mb-4">
                    Featured Movies
                </div>
                <Flickity className="gap-[30px]" options={flickityOptions}>
                    {[1, 2, 3, 4].map((i) => (
                        <FeaturedMovie
                            key={i}
                            slug="the-batman-in-love"
                            name={`The Batman In Love ${i}`}
                            category="Comedy"
                            thumbnail="https://picsum.photos/id/1/300/300"
                            rating={i + 1}
                        />
                    ))}
                </Flickity>
            </div>
        </AuthenticatedLayout>
    );
}
