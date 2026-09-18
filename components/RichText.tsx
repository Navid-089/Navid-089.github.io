import Link from 'next/link';
import { newTabProps } from '@/lib/utils';

interface Props {
    text: string;
}

// renders plain text with inline [label](url) links
const RichText = ({ text }: Props) => {
    const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);

    return (
        <>
            {parts.map((part, idx) => {
                const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
                if (!match) return part;

                const [, label, url] = match;

                if (url.startsWith('/')) {
                    return (
                        <Link href={url} className="link" key={idx}>
                            {label}
                        </Link>
                    );
                }

                return (
                    <a
                        href={url}
                        className="link"
                        key={idx}
                        {...newTabProps(url)}
                    >
                        {label}
                    </a>
                );
            })}
        </>
    );
};

export default RichText;
