import ElementosTela from './ElementosTela';

function CampoBatalha({ className }: { className: string }) {

  return (
    <div>
      <div id='campoBatalha'></div>
      <ElementosTela className={className} />
    </div>

  );
}

export default CampoBatalha