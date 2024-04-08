import AppWrapper from "@/components/AppWrapper";
import getSandwiches from "@/data/sandwiches/getSandwiches";

export default async function Home() {
  const sandwiches = await getSandwiches();
  return (
    <AppWrapper>
      {sandwiches.map((sandwich) => (
        <div key={sandwich.sandwichId} className="flex flex-col gap-2">
          <h2>{sandwich.sandwichName}</h2>
          <img
            src={sandwich.imageUrl}
            alt={sandwich.sandwichName}
            className="aspect-video"
          />
          <p>{sandwich.description}</p>
          <p>{sandwich.calories} calories</p>
          <a href={sandwich.url}>Order now</a>
        </div>
      ))}
    </AppWrapper>
  );
}
