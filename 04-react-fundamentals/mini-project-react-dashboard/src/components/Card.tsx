type CardProps = {
    title: string;
    category: string;
    description: string;
};

function Card({ title, category, description }: CardProps) {
    return (
        <article>
            <p>{category}</p>
            <h2>{title}</h2>
            <p>{description}</p>
        </article>
    );
}

export default Card;