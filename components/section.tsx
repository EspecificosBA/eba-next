import { FunctionComponent, CSSProperties } from 'react';

type SectionProps = {
  color?: 'default' | 'muted' | 'primary' | 'secondary',
  size?: 'xsmall' | 'small' | 'default' | 'large' | 'xlarge' | 'remove-vertical',
  tag?: 'section' | 'div'
  className?: string,
  id?: string,
  img?: string,
  position?: string,
  [key: string]: any
}

const Section: FunctionComponent<SectionProps> = ({ 
  color = 'default',
  size = 'small',
  className = '',
  tag: Tag = 'section',
  img,
  position,
  children,
  ...props
}) => {
  const bgImgStyles: CSSProperties = img ? {
    background: `url(${img})`,
    backgroundPosition: position ? position : 'bottom center',
  } : {};

  return (
    <Tag 
      className={`section section-${color} section-${size} ${className} ${img ? 'section-cover' : ''}`}
      {...props}
      style={{...props.style, ...bgImgStyles}}
    >
      <div className="container">
        { children }
      </div>
      <style jsx>{`
        .section {
          box-sizing: border-box;
          display: flex;
          align-items: center;
          width: 100%;
        }

        .section .container {
          padding: 5rem;
          width: 100%;
          max-width: 900px;
          margin: auto;
          box-sizing: border-box;
        }

        .section.section-default {
          padding: 1.5rem;
        }

        .section.section-xsmall {
          padding: 0;
        }

        .section.section-xsmall > .container {
          padding: 1rem;
        }
        
        .section.section-small {
          padding: 2.5rem 0;
        }

        .section.section-small > .container {
          padding: 0 4rem;
        }
        
        .section.section-regular {
          padding: 5rem 0;
        }

        .section.section-large {
          padding: 10rem 0;
        }

        .section.section-xlarge {
          height: 80vh;
        }

        .section.section-remove-vertical {
          padding-top: 0rem;
        }
      
        .section.section-primary {
          background-color: var(--primaryColor);
          color: var(--primaryTextColor);
        }

        .section.section-muted {
          background-color: var(--secondaryXLightColor);
          color: var(--secondaryTextColor);
        }

        .section.section-default {
          background-color: #fff;
          color: var(--secondaryTextColor);
        }

        .section.section-secondary {
          background-color: var(--primaryDarkColor);
          color: var(--primaryTextColor);
        }

        .section.section-cover {
          background-size: cover;
          background-position: bottom left;
        }

        @media screen and (max-width: 426px) {
          .section .container {
            padding: 5%;
          }
          .section.section-small {
            padding: 1rem 0;
          }
          .section.section-small > .container {
            padding: 1rem;
          }
        }

      `}</style>
    </Tag>
  )
}

export default Section;