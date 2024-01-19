import { Paragraph } from '@/lib/ui/paragraph';
import Image, { ImageProps } from 'next/image';

type ImageCardProps = ImageProps & {
  caption?: {
    text: string;
  };
};

export function ImageCard({ caption, ...props }: ImageCardProps) {
  return (
    <div className='flex justify-center'>
      <div className='w-80 max-w-sm drop-shadow-xl'>
        <Image
          {...props}
          alt={props.alt}
          className='m-auto h-auto w-full sepia-[.40]'
        />
        <div className='bg-background-500 shadow-lg '>
          {caption && (
            <Paragraph subtle className='m-0 p-4'>
              {caption.text}
            </Paragraph>
          )}
        </div>
      </div>
    </div>
  );
}
