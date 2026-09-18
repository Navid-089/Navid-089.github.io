import { cn } from '@/lib/utils';

interface Props {
    className?: string;
    title: string;
}

const SectionTitle = ({ title, className }: Props) => {
    return (
        <h2
            className={cn(
                'mb-8 border-b pb-2 font-serif text-2xl font-semibold',
                className,
            )}
        >
            {title}
        </h2>
    );
};

export default SectionTitle;
