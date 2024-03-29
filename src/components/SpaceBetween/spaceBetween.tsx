import '/src/components/SpaceBetween/spaceBetween.css'

interface SpaceBetweenProps {
  size: 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl';
}

export default function SpaceBetween(SpaceBetweenProps: SpaceBetweenProps){
  return <div className={'space-size-' + SpaceBetweenProps.size}>{}</div>
}