import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Robotics/docs',
    component: ComponentCreator('/Robotics/docs', '3d5'),
    routes: [
      {
        path: '/Robotics/docs',
        component: ComponentCreator('/Robotics/docs', '5ff'),
        routes: [
          {
            path: '/Robotics/docs',
            component: ComponentCreator('/Robotics/docs', '7ed'),
            routes: [
              {
                path: '/Robotics/docs/',
                component: ComponentCreator('/Robotics/docs/', '29a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/Robotics/docs/part_i/chapter_1',
                component: ComponentCreator('/Robotics/docs/part_i/chapter_1', '12a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/Robotics/docs/part_i/chapter_2',
                component: ComponentCreator('/Robotics/docs/part_i/chapter_2', '08d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/Robotics/docs/part_i/chapter_3',
                component: ComponentCreator('/Robotics/docs/part_i/chapter_3', '66b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/Robotics/docs/part_ii/chapter_4',
                component: ComponentCreator('/Robotics/docs/part_ii/chapter_4', '6ca'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/Robotics/docs/part_ii/chapter_5',
                component: ComponentCreator('/Robotics/docs/part_ii/chapter_5', '83d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/Robotics/docs/part_ii/chapter_6',
                component: ComponentCreator('/Robotics/docs/part_ii/chapter_6', '788'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/Robotics/docs/part_iii/chapter_7',
                component: ComponentCreator('/Robotics/docs/part_iii/chapter_7', '46f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/Robotics/docs/part_iii/chapter_8',
                component: ComponentCreator('/Robotics/docs/part_iii/chapter_8', '9a6'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/Robotics/docs/part_iii/chapter_9',
                component: ComponentCreator('/Robotics/docs/part_iii/chapter_9', '22e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/Robotics/docs/part_iv/chapter_10',
                component: ComponentCreator('/Robotics/docs/part_iv/chapter_10', '801'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/Robotics/docs/part_iv/chapter_11',
                component: ComponentCreator('/Robotics/docs/part_iv/chapter_11', 'c8f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/Robotics/docs/part_iv/chapter_12',
                component: ComponentCreator('/Robotics/docs/part_iv/chapter_12', '0ea'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/Robotics/docs/part_v/chapter_13',
                component: ComponentCreator('/Robotics/docs/part_v/chapter_13', '0ff'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/Robotics/docs/part_v/chapter_14',
                component: ComponentCreator('/Robotics/docs/part_v/chapter_14', '1e5'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/Robotics/',
    component: ComponentCreator('/Robotics/', 'c5a'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
