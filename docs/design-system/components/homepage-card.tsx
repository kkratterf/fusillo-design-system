export const HomepageCard = ({ title, description, link }) => (
  <div className="grid space-y-6 p-2 mb-3">
    <div className="grid space-y-4">
      <p className="text-2xl font-semibold">{title}</p>
      <p className="text-base font-normal">{description}</p>
    </div>
    <p className="font-medium text-brand">{link}</p>
  </div>
);
