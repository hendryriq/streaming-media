import { Link } from "@inertiajs/react";
import PropTypes from "prop-types";

FeaturedMovie.propTypes = {
    slug: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    rating: PropTypes.number,
};

FeaturedMovie.defaultProps = {
    rating: 0,
};

export default function FeaturedMovie({
    slug,
    name,
    category,
    thumbnail,
    rating = 0,
}) {
    return (
        <div className="relative group overflow-hidden mr-[30px]">
            <Link href={route('user.dashboard.movie.show', slug)}>
                <img 
                    src={thumbnail} 
                    alt={name}
                    className="w-full h-[340px] object-cover rounded-[30px]"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-[30px]">
                    <div className="text-white font-semibold text-xl">{name}</div>
                    <div className="text-gray-300 text-sm">{category}</div>
                    <div className="flex items-center mt-2">
                        {[...Array(5)].map((_, i) => (
                            <svg
                                key={i}
                                className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-400'}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                </div>
            </Link>
        </div>
    );
}