// @ts-nocheck
import GettingStartSvg from "../../assets/svg/Tabs/GettingStartSvg";
import CollectionListSvg from "../../assets/svg/Tabs/CollectionListSvg";
import ElementSvg from "../../assets/svg/Tabs/ElementSvg";
import StylingSvg from "../../assets/svg/Tabs/StylingSvg";
import ImageFieldSvg from "../../assets/svg/Tabs/ImageFieldSvg";
import VideoThumb from "../../images/video-thumb.jpg";

export const TabsList = [
  {
    index: "1",
    icon: GettingStartSvg,
    text: "Getting Start",
  },
  {
    index: "2",
    icon: CollectionListSvg,
    text: "Collection list",
  },
  {
    index: "3",
    icon: ElementSvg,
    text: "Element Hierarchy",
  },
  {
    index: "4",
    icon: StylingSvg,
    text: "Styling Basics",
  },
  {
    index: "5",
    icon: ImageFieldSvg,
    text: "Image Field",
  },
];

export const TabsVideo = {
  1: [
    {
      image: VideoThumb.src,
      duration: "2 Min",
      title: "Using index page",
    },
    {
      image: VideoThumb.src,
      duration: "4 Min",
      title: "Working with content",
    },
    {
      image: VideoThumb.src,
      duration: "5 Min",
      title: "Using cover pages",
    },
    {
      image: VideoThumb.src,
      duration: "7 Min",
      title: "Intro to the style model",
    },
  ],
  2: [
    {
      image: VideoThumb.src,
      duration: "4 Min",
      title: "Working with content",
    },
    {
      image: VideoThumb.src,
      duration: "12 Min",
      title: "Exploring collections",
    },
    {
      image: VideoThumb.src,
      duration: "3 Min",
      title: "Understand Hierarchy",
    },
    {
      image: VideoThumb.src,
      duration: "11 Min",
      title: "Customizations",
    },
  ],
  3: [
    {
      image: VideoThumb.src,
      duration: "4 Min",
      title: "Working with content",
    },
    {
      image: VideoThumb.src,
      duration: "12 Min",
      title: "Exploring collections",
    },
  ],
  4: [
    {
      image: VideoThumb.src,
      duration: "4 Min",
      title: "Working with content",
    },
    {
      image: VideoThumb.src,
      duration: "12 Min",
      title: "Exploring collections",
    },
    {
      image: VideoThumb.src,
      duration: "3 Min",
      title: "Understand Hierarchy",
    },
  ],
  5: [
    {
      image: VideoThumb.src,
      duration: "4 Min",
      title: "Working with content",
    },
    {
      image: VideoThumb.src,
      duration: "12 Min",
      title: "Exploring collections",
    },
    {
      image: VideoThumb.src,
      duration: "3 Min",
      title: "Understand Hierarchy",
    },
    {
      image: VideoThumb.src,
      duration: "11 Min",
      title: "Customizations",
    },
  ],
};
