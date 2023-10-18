export default function cloudinaryLoader({ src }) {
    return `https://res.cloudinary.com/drclzoljh/image/upload${src}`;
}