import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { generateClient } from 'aws-amplify/api';
import SideNavigation from '@cloudscape-design/components/side-navigation';

/** @type {ReturnType<typeof generateClient<import('../../amplify/data/resource').Schema>} */
const client = generateClient();

export default function Navigation(props) {
  const router = useRouter();
  const [categories, setCategories] = useState([]);

  // handle navigation changes
  const routeChange = (path) => {
    router.push(path);
  };

  useEffect(() => {
    // Query categories for building the menu
    async function queryCategories() {
      if (categories.length === 0) {
        try {
          const { data: categories, errors } = await client.models.Category.list();
          console.log("fetching categories");
          setCategories(categories.sort((a,b) => ((a.name > b.name) ? 1 : -1 )));
        } catch (error) {
          console.log("Error retrieving categories", error);
        }
      }
    }
    queryCategories();
  }, []);

  return (
    <SideNavigation
      activeHref={props.activeHref}
      header={{ href: "/", text: "Categories" }}
      onFollow={event => {    
        if (!event.detail.external) {      
          event.preventDefault();
          routeChange(event.detail.href);
        }    
      }}
      items={
        categories.map((c) => {
          return {
            type: "link",
            text: c.name,
            href: `/category/${c.name}`
          };
        })
      }
    />
  );
}