"use client";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faTimes, faImage, faLanguage, faCreditCard, faSpider, faEye, faCode, faBug, faCodeBranch, faCloud, faCheck, faClock, faMagnifyingGlass, faChevronLeft, faChevronRight, } from '@fortawesome/free-solid-svg-icons';

function MainComponent() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [randomTool, setRandomTool] = React.useState(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const [autoSlideTimer, setAutoSlideTimer] = React.useState(null);
  const [scrollPosition, setScrollPosition] = React.useState({
    Development: 0,
    Productivity: 0,
    Programming: 0,
    ContentCreation: 0,
    Miscellaneous: 0,
    Mainstream: 0,
  });
  const [tools] = React.useState([
    {
      name: "ChatGPT",
      description: "Advanced conversational AI developed by OpenAI",
      category: "Mainstream",
      icon: "faComments",
      image: "/chatgpt.jpg",
      trending: true,
      isNew: true,
      editor_pick: true,
      link: "https://chat.openai.com/",
    },
    {
      name: "DeepSeek R1",
      description: "Efficient open-source AI model rivaling ChatGPT",
      category: "Mainstream",
      icon: "faRobot",
      image: "/deepseek.jpg",
      trending: false,
      isNew: true,
      editor_pick: true,
      link: "https://deepseek.ai/",
    },
    {
      name: "Jasper",
      description: "AI writing assistant for creating high-quality content",
      category: "Mainstream",
      icon: "faPenNib",
      image: "/jasper.jpg",
      trending: false,
      isNew: true,
      editor_pick: true,
      link: "https://www.jasper.ai/",
    },
    {
      name: "Copy.ai",
      description: "AI-powered tool for generating marketing copy",
      category: "Mainstream",
      icon: "faCopy",
      image: "/copyai.jpg",
      trending: false,
      isNew: true,
      editor_pick: false,
      link: "https://www.copy.ai/",
    },
    {
      name: "DALL·E 3",
      description: "AI system generating images from textual descriptions",
      category: "Mainstream",
      icon: "faImage",
      image: "/dalle3.jpg",
      trending: false,
      isNew: true,
      editor_pick: true,
      link: "https://openai.com/dall-e-3",
    },
    {
      name: "Midjourney",
      description: "AI tool for creating images from textual prompts",
      category: "Mainstream",
      icon: "faPalette",
      image: "/midjourney.jpg",
      trending: false,
      isNew: true,
      editor_pick: true,
      link: "https://www.midjourney.com/",
    },
    {
      name: "Grammarly",
      description: "AI-powered writing assistant for grammar and style",
      category: "Mainstream",
      icon: "faSpellCheck",
      image: "/grammarly.jpg",
      trending: false,
      isNew: true,
      editor_pick: true,
      link: "https://www.grammarly.com/",
    },
    {
      name: "Notion AI",
      description: "AI-enhanced productivity and note-taking application",
      category: "Mainstream",
      icon: "faTasks",
      image: "/notionai.jpg",
      trending: false,
      isNew: true,
      editor_pick: true,
      link: "https://www.notion.so/product/ai",
    },
    {
      name: "Descript",
      description: "AI-driven video and audio editing platform",
      category: "Mainstream",
      icon: "faVideo",
      image: "/descript.jpg",
      trending: true,
      isNew: true,
      editor_pick: true,
      link: "https://www.descript.com/",
    },
    {
      name: "Murf",
      description: "AI voice generator for creating realistic voiceovers",
      category: "Mainstream",
      icon: "faMicrophone",
      image: "/murf.jpg",
      trending: false,
      isNew: true,
      editor_pick: true,
      link: "https://murf.ai/",
    },
    {
      name: "SaneBox",
      description: "AI tool for email inbox management and prioritization",
      category: "Mainstream",
      icon: "faEnvelopeOpenText",
      image: "/sanebox.jpg",
      trending: false,
      isNew: true,
      editor_pick: false,
      link: "https://www.sanebox.com/",
    },
    {
      name: "Reclaim",
      description: "AI-powered scheduling assistant for time management",
      category: "Mainstream",
      icon: "faCalendarAlt",
      image: "/reclaim.jpg",
      trending: false,
      isNew: true,
      editor_pick: false,
      link: "https://reclaim.ai/",
    },
    {
      name: "Fireflies",
      description: "AI meeting assistant for transcription and note-taking",
      category: "Mainstream",
      icon: "faFileAudio",
      image: "/fireflies.jpg",
      trending: false,
      isNew: true,
      editor_pick: false,
      link: "https://fireflies.ai/",
    },
    {
      name: "Gamma",
      description: "AI tool for creating engaging presentations",
      category: "Mainstream",
      icon: "faChalkboardTeacher",
      image: "/gamma.jpg",
      trending: false,
      isNew: true,
      editor_pick: false,
      link: "https://gamma.app/",
    },
    {
      name: "ElevenLabs",
      description: "AI platform for generating lifelike synthetic voices",
      category: "Mainstream",
      icon: "faHeadphones",
      image: "/elevenlabs.jpg",
      trending: false,
      isNew: true,
      editor_pick: false,
      link: "https://elevenlabs.io/",
    },
    {
      name: "Suno",
      description: "AI tool for music and audio generation",
      category: "Mainstream",
      icon: "faMusic",
      image: "/suno.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://www.suno.ai/",
    },
    {
      name: "Tidio AI",
      description: "AI-powered customer service chatbot",
      category: "Mainstream",
      icon: "faHeadset",
      image: "/tidioai.jpg",
      trending: true,
      isNew: false,
      editor_pick: false,
      link: "https://www.tidio.com/",
    },
    {
      name: "Textio",
      description: "AI tool for enhancing recruitment and job postings",
      category: "Mainstream",
      icon: "faBriefcase",
      image: "/textio.jpg",
      trending: true,
      isNew: false,
      editor_pick: false,
      link: "https://textio.com/",
    },
    {
      name: "HubSpot Email Writer",
      description: "AI assistant for crafting effective marketing emails",
      category: "Mainstream",
      icon: "faEnvelope",
      image: "/hubspotemail.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://www.hubspot.com/",
    },
    {
      name: "Clay",
      description: "AI-driven sales enablement platform",
      category: "Mainstream",
      icon: "faChartLine",
      image: "/clay.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://www.clay.com/",
    },

    // --------------- ABOVE REAL, BELOW PLACEHOLDER

    {
      name: "Development Tool 1",
      description: "A powerful development environment",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://create.xyz/tools/development-tool-1",
    },
    {
      name: "Development Tool 2",
      description: "Code faster and better",
      category: "Development",
      icon: faCode,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://create.xyz/tools/development-tool-2",
    },
    {
      name: "Development Tool 3",
      description: "Advanced debugging tools",
      category: "Development",
      icon: faBug,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://create.xyz/tools/development-tool-3",
    },
    {
      name: "Development Tool 4",
      description: "Version control made easy",
      category: "Development",
      icon: faCodeBranch,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://create.xyz/tools/development-tool-4",
    },
    {
      name: "Development Tool 5",
      description: "Cloud development environment",
      category: "Development",
      icon: faCloud,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://create.xyz/tools/development-tool-5",
    },
    {
      name: "Productivity Tool 1",
      description: "Manage your tasks efficiently",
      category: "Productivity",
      icon: faCheck,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://create.xyz/tools/productivity-tool-1",
    },
    {
      name: "Productivity Tool 2",
      description: "Time tracking made simple",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://create.xyz/tools/productivity-tool-2",
    },
    {
      name: "Productivity Tool 3",
      description: "Time tracking made simple",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://create.xyz/tools/productivity-tool-3",
    },
    {
      name: "Productivity Tool 4",
      description: "Time tracking made simple",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://create.xyz/tools/productivity-tool-4",
    },
    {
      name: "Productivity Tool 5",
      description: "Time tracking made simple",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://create.xyz/tools/productivity-tool-5",
    },
    {
      name: "Productivity Tool 6",
      description: "Time tracking made simple",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://create.xyz/tools/productivity-tool-6",
    },
    {
      name: "Productivity Tool 7",
      description: "Time tracking made simple",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://create.xyz/tools/productivity-tool-7",
    },
    {
      name: "Productivity Tool 8",
      description: "Time tracking made simple",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://create.xyz/tools/productivity-tool-8",
    },
    {
      name: "Productivity Tool 9",
      description: "Time tracking made simple",
      category: "Productivity",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://create.xyz/tools/productivity-tool-9",
    },
    {
      name: "Programming Tool 1",
      description: "Time tracking made simple",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://create.xyz/tools/Programming-tool-1",
    },
    {
      name: "Programming Tool 2",
      description: "Time tracking made simple",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://create.xyz/tools/Programming-tool-2",
    },
    {
      name: "Programming Tool 3",
      description: "Time tracking made simple",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://create.xyz/tools/Programming-tool-3",
    },
    {
      name: "Programming Tool 4",
      description: "Time tracking made simple",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://create.xyz/tools/Programming-tool-4",
    },
    {
      name: "Programming Tool 5",
      description: "Time tracking made simple",
      category: "Programming",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://create.xyz/tools/Programming-tool-5",
    },
    {
      name: "ContentCreation Tool 1",
      description: "Time tracking made simple",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://create.xyz/tools/ContentCreation-tool-1",
    },
    {
      name: "ContentCreation Tool 2",
      description: "Time tracking made simple",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://create.xyz/tools/ContentCreation-tool-2",
    },
    {
      name: "ContentCreation Tool 3",
      description: "Time tracking made simple",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://create.xyz/tools/ContentCreation-tool-3",
    },
    {
      name: "ContentCreation Tool 4",
      description: "Time tracking made simple",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://create.xyz/tools/ContentCreation-tool-4",
    },
    {
      name: "ContentCreation Tool 5",
      description: "Time tracking made simple",
      category: "ContentCreation",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://create.xyz/tools/ContentCreation-tool-5",
    },
    {
      name: "Miscellaneous Tool 1",
      description: "Time tracking made simple",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://create.xyz/tools/Miscellaneous-tool-1",
    },
    {
      name: "Miscellaneous Tool 2",
      description: "Time tracking made simple",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://create.xyz/tools/Miscellaneous-tool-2",
    },
    {
      name: "Miscellaneous Tool 3",
      description: "Time tracking made simple",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://create.xyz/tools/Miscellaneous-tool-3",
    },
    {
      name: "Miscellaneous Tool 4",
      description: "Time tracking made simple",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://create.xyz/tools/Miscellaneous-tool-4",
    },
    {
      name: "Miscellaneous Tool 5",
      description: "Time tracking made simple",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://create.xyz/tools/Miscellaneous-tool-5",
    },
    {
      name: "Miscellaneous Tool 6",
      description: "Time tracking made simple",
      category: "Miscellaneous",
      icon: faClock,
      image: "/placeholder.jpg",
      trending: false,
      isNew: false,
      editor_pick: false,
      link: "https://create.xyz/tools/Miscellaneous-tool-6",
    },
  ]);

  // Define isClient directly in the component
  const [isClient, setIsClient] = React.useState(false);
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({ name: "", link: "", purpose: "" });


  React.useEffect(() => {
    setIsClient(true);
  }, []);

  const searchRef = React.useRef(null);
  const [isSearchFocused, setIsSearchFocused] = React.useState(false);

  const handleRandomAI = () => {
    const randomIndex = Math.floor(Math.random() * tools.length);
    setRandomTool(tools[randomIndex]);
  };

  const handleHideRandomAI = () => {
    setRandomTool(null);
  };

  React.useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [isPopupOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.link && formData.purpose) {
      const emailContent = `AI Name: ${formData.name}\nLink to website: ${formData.link}\nPurpose of AI: ${formData.purpose}`;
      window.location.href = `mailto:abubakar@advancedyoutube.com?subject=Request to Add AI&body=${encodeURIComponent(emailContent)}`;
      setIsPopupOpen(false);
      setFormData({ name: "", link: "", purpose: "" });
    } else {
      alert("Please fill out all fields.");
    }
  };


  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchTerm("");
        setIsSearchFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredTools = tools.filter(
    (tool) =>
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  const [showAllEditorPicks, setShowAllEditorPicks] = React.useState(false);
  const [showAllSearchResults, setShowAllSearchResults] = React.useState(false);
  const trendingTools = tools.filter((tool) => tool.trending);

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 5000);

    setAutoSlideTimer(timer);

    return () => {
      if (autoSlideTimer) {
        clearInterval(autoSlideTimer);
      }
    };
  }, [currentSlide, isTransitioning]);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      if (autoSlideTimer) {
        clearInterval(autoSlideTimer);
      }
      setCurrentSlide((prev) =>
        prev === trendingTools.length - 1 ? 0 : prev + 1
      );
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      if (autoSlideTimer) {
        clearInterval(autoSlideTimer);
      }
      setCurrentSlide((prev) =>
        prev === 0 ? trendingTools.length - 1 : prev - 1
      );
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const searchResults =
  searchTerm.length >= 2 && isSearchFocused // Changed condition
    ? tools.filter(
        (tool) =>
          tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tool.category.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : [];
  const displayedResults = showAllSearchResults
    ? searchResults
    : searchResults.slice(0, 5);
  const hasMoreResults = searchResults.length > 5;
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setShowAllSearchResults(false);
  };
  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };
  const handleImageError = (e) => {
    e.target.src = "/placeholder.jpg";
  };

  const goToSlide = (index) => {
    if (!isTransitioning && index !== currentSlide) {
      setIsTransitioning(true);
      if (autoSlideTimer) {
        clearInterval(autoSlideTimer);
      }
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const handleScroll = (category, direction) => {
    if (!isClient) return;

    const itemWidth = 280;
    const gap = 24;
    const itemsToScroll = 2;
    const scrollAmount = (itemWidth + gap) * itemsToScroll;

    setScrollPosition((prev) => {
      const toolsInCategory = tools.filter((t) => t.category === category);
      const containerWidth = window.innerWidth > 1280 ? 1280 - 64 : window.innerWidth - 32;
      const itemsPerView = Math.floor(containerWidth / (itemWidth + gap));
      const maxScroll = Math.max(0, (toolsInCategory.length - itemsPerView) * (itemWidth + gap));

      let nextScroll;
      if (direction === 'left') {
        nextScroll = Math.max(0, prev[category] - scrollAmount);
      } else {
        nextScroll = Math.min(maxScroll, prev[category] + scrollAmount);
      }

      return { ...prev, [category]: nextScroll };
    });
  };


  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] to-[#121212] overflow-x-hidden flex flex-col">
      <nav className="w-full bg-[#ffffff08] sticky backdrop-blur-sm px-8 py-2 border-b border-[#ffffff15]">
        <div className="max-w-[1920px] mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#5FFAC6] to-[#4DE6B4] rounded-full blur opacity-30"></div>
              <FontAwesomeIcon icon={faRobot} className="relative text-[#5FFAC6] text-2xl mr-3" />
            </div>
            <h1 className="text-3xl text-white font-orbitron bg-gradient-to-r from-[#ffffff] to-[#ffffff80] bg-clip-text text-transparent">
              Seek An AI
            </h1>
          </div>
          <button
            className="px-6 py-2 rounded-full bg-[#5FFAC6] text-black font-medium hover:bg-[#4DE6B4]"
            onClick={() => setIsPopupOpen(true)}
          >
            Request an AI
          </button>
        </div>
      </nav>

      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
          <div className="relative bg-black text-white rounded-2xl shadow-lg w-96 p-6 z-50">
            <button
              className="absolute top-4 right-4 text-[#5FFAC6] hover:text-white"
              onClick={() => setIsPopupOpen(false)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <h2 className="text-xl text-center text-[#5FFAC6] font-semibold mb-8">Request an AI</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2 text-sm" htmlFor="name">AI Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg bg-[#ffffff0a] border border-[#ffffff15] focus:outline-none focus:ring-2 focus:ring-[#5FFAC6]"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm" htmlFor="link">Link to Website</label>
                <input
                  type="url"
                  id="link"
                  name="link"
                  value={formData.link}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg bg-[#ffffff0a] border border-[#ffffff15] focus:outline-none focus:ring-2 focus:ring-[#5FFAC6]"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm" htmlFor="purpose">Purpose of AI</label>
                <textarea
                  id="purpose"
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleInputChange}
                  className="resize-none w-full px-4 py-2 rounded-lg bg-[#ffffff0a] border border-[#ffffff15] focus:outline-none focus:ring-2 focus:ring-[#5FFAC6]"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 rounded-full bg-[#5FFAC6] text-black font-medium hover:bg-[#4DE6B4]"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="w-full backdrop-blur-md px-8 py-4 sticky top-0 z-50">
        <div className="max-w-[1280px] mx-auto flex justify-center">
          <div className="flex space-x-8 overflow-x-auto bg-[#0A0A0A80] px-6 py-2 rounded-full">
            {[
              "Development",
              "Mainstream",
              "Productivity",
              "Programming",
              "Content Creation",
              "Miscellaneous",
            ].map((category) => (
              <a
                key={category}
                href={`#${category.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-[#ffffff80] hover:text-white transition-colors duration-300 font-roboto whitespace-nowrap px-4 py-2 hover:bg-[#ffffff15] rounded-full"
              >
                {category}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow">
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(95,250,198,0.15)]">
            <div className="relative w-full overflow-hidden h-[200px] rounded-2xl">
              <div
                className="absolute w-full h-full transition-all duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                  filter: isTransitioning ? "brightness(0.8)" : "brightness(1)",
                }}
              >
                <div className="flex h-full">
                  {tools
                    .filter((tool) => tool.trending)
                    .map((tool, index) => (
                      <a
                        key={index}
                        href={`/tool/${tool.name
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="w-full flex-shrink-0 cursor-pointer"
                      >
                        <div className="relative h-full">
                          <img
                            src={tool.image || "/placeholder.jpg"}
                            alt={`${tool.name} interface preview`}
                            onError={handleImageError}
                            className="w-full h-full object-cover transform transition-transform duration-500"
                            style={{
                              transform:
                                currentSlide === index
                                  ? "scale(1.05)"
                                  : "scale(1)",
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.95)] via-[rgba(0,0,0,0.7)] to-transparent hover:via-[rgba(0,0,0,0.6)] transition-all duration-300"></div>
                          <div className="absolute bottom-0 left-[40px] right-0 px-[72px] pb-8">
                            <div className="flex items-center gap-2 mb-3">
                              <span
                                className="inline-block px-3 py-1 text-xs rounded-lg bg-[#5FFAC6] text-black font-medium backdrop-blur-sm transform transition-all duration-500 opacity-90"
                                style={{
                                  transform: `translateY(${currentSlide === index ? "0" : "20px"
                                    })`,
                                  opacity: currentSlide === index ? 1 : 0,
                                }}
                              >
                                {tool.category}
                              </span>
                            </div>
                            <h3
                              className="text-white text-xl font-semibold font-roboto transform transition-all duration-500 mb-2"
                              style={{
                                transform: `translateY(${currentSlide === index ? "0" : "20px"
                                  })`,
                                opacity: currentSlide === index ? 1 : 0,
                              }}
                            >
                              {tool.name}
                            </h3>
                            <p
                              className="text-white/70 text-sm font-roboto line-clamp-2 transform transition-all duration-500"
                              style={{
                                transform: `translateY(${currentSlide === index ? "0" : "20px"
                                  })`,
                                opacity: currentSlide === index ? 1 : 0,
                              }}
                            >
                              {tool.description}
                            </p>
                          </div>
                        </div>
                      </a>
                    ))}
                </div>
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-[#ffffff20] border border-white/20 shadow-lg transition-all duration-300 z-10 hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:bg-[#ffffff30]"
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-white/80 text-sm" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-[#ffffff20] border border-white/20 shadow-lg transition-all duration-300 z-10 hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:bg-[#ffffff30]"
            >
              <FontAwesomeIcon icon={faChevronRight} className="text-white/80 text-sm" />
            </button>

            <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center gap-2 z-20">
              {tools
                .filter((tool) => tool.trending)
                .map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-full cursor-pointer hover:scale-110 ${currentSlide === index
                        ? "w-[24px] h-[6px] bg-[#5FFAC6]"
                        : "w-[6px] h-[6px] bg-white/50 hover:bg-white/70"
                      }`}
                  />
                ))}
            </div>
          </div>
        </div>

        <div className="relative mb-16 max-w-2xl mx-auto">
        <div className="relative" ref={searchRef}>
          <input
            type="text"
            name="search"
            placeholder="Search tools..."
            value={searchTerm}
            onChange={handleSearchChange}
            onFocus={handleSearchFocus}
            className="w-full h-16 pl-14 pr-4 rounded-2xl bg-[#ffffff0a] text-white text-lg border border-[#ffffff15] focus:outline-none focus:ring-2 focus:ring-[#5FFAC6] focus:border-transparent font-roboto placeholder-[#ffffff40] transition-all duration-300 hover:bg-[#ffffff12] shadow-lg cursor-text"
            style={{
              position: "relative",
              zIndex: 49,
              pointerEvents: "auto",
            }}
            autoComplete="off"
          />
          <div className="absolute left-5 top-1/2 transform -translate-y-1/2">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[#5FFAC6] text-lg" />
          </div>
          {searchTerm.length >= 2 && isSearchFocused && (
            <div className="absolute w-full mt-2 bg-[#1A1A1A] rounded-xl overflow-hidden shadow-xl z-50 border border-[#ffffff15] max-h-[600px] overflow-y-auto">
              {searchResults.length === 0 ? (
                <div className="px-6 py-4 text-[#ffffff80] font-roboto">
                  No result found
                </div>
              ) : (
                <>
                  {displayedResults.map((result, index) => (
                    <a
                      key={index}
                      href={`/tool/${result.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="block px-6 py-4 hover:bg-[#ffffff0a] border-b border-[#ffffff15] last:border-b-0 transition-colors duration-200"
                    >
                      <div className="flex items-center">
                        <div className="w-[40px] h-[40px] rounded-xl overflow-hidden flex-shrink-0">
                          <img
                            src={result.image}
                            alt={result.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="ml-3">
                          <h4 className="text-white font-roboto font-medium">
                            {result.name}
                          </h4>
                          <p className="text-[#ffffff80] text-sm font-roboto line-clamp-1">
                            {result.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                  {hasMoreResults && !showAllSearchResults && (
                    <button
                      onClick={() => setShowAllSearchResults(true)}
                      className="w-full px-6 py-4 text-center text-[#5FFAC6] font-roboto hover:bg-[#ffffff0a] transition-colors duration-200 border-t border-[#ffffff15] font-medium"
                    >
                      View All Results
                    </button>
                  )}
                </>
              )}
            </div>
          )}
        </div>
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#5FFAC620] to-[#4DE6B410] rounded-2xl blur opacity-50"></div>
      </div>

        {/* Random AI Section */}
        <div className="text-center mb-16">
        <button
          onClick={handleRandomAI}
          className="px-6 py-2 rounded-full bg-[#5FFAC6] text-black font-medium hover:bg-[#4DE6B4] transition-all duration-300 font-roboto shadow-lg shadow-[#5FFAC640] hover:shadow-[#5FFAC660] hover:scale-105"
        >
          Show me a Random AI
        </button>

        {randomTool && (
          <div className="mt-8 max-w-md mx-auto">
            <a
              href={randomTool.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full h-64 rounded-2xl group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl block"
            >
                {randomTool.isNew && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-[#FF0000] text-white text-xs font-bold px-3 py-1.5 rounded-md">
                      NEW
                    </span>
                  </div>
                )}
                <img
                  src={randomTool.image || "/placeholder.jpg"}
                  alt={randomTool.name}
                  onError={handleImageError}
                  className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-300 rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#00000090] to-transparent group-hover:via-[#00000070] transition-all duration-300 rounded-2xl">
                  <div className="absolute bottom-0 left-0 right-0 p-5 transform transition-all duration-300 group-hover:translate-y-[-4px]">
                    <h3 className="text-white text-lg font-semibold font-roboto">
                      {randomTool.name}
                    </h3>
                    <p className="text-[#ffffff80] text-sm mt-1 line-clamp-2 font-roboto">
                      {randomTool.description}
                    </p>
                    <span className="text-[#5FFAC6] text-sm font-medium">
                      {randomTool.category}
                    </span>
                  </div>
                </div>
              </a>
              <button
              onClick={handleHideRandomAI}
              className="mt-4 px-4 py-2 rounded-full bg-red-500/20 text-red-300 font-medium hover:bg-red-500/30 transition-all duration-300 font-roboto text-sm hover:scale-105"
            >
              Hide
            </button>
            </div>
          )}
        </div>

        <div className="mb-16">
          <h2 id="development" className="text-2xl text-white font-roboto mb-6">Development</h2>
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 gap-6"
                style={{ transform: `translateX(-${scrollPosition.Development}px)` }}
              >
                {tools
                  .filter((tool) => tool.category === "Development")
                  .map((tool, index) => (
                    <a
                      key={index}
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-[280px] flex-shrink-0 h-[220px] rounded-2xl group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      {tool.isNew && (
                        <div className="absolute top-3 left-3 z-10">
                          <span className="bg-[#FF0000] text-white text-xs font-bold px-3 py-1.5 rounded-md">
                            NEW
                          </span>
                        </div>
                      )}
                      <img
                        src={tool.image}
                        alt={tool.name}
                        className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-300 rounded-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#00000090] to-transparent group-hover:via-[#00000070] transition-all duration-300 rounded-2xl">
                        <div className="absolute bottom-0 left-0 right-0 p-5 transform transition-all duration-300 group-hover:translate-y-[-4px]">
                          <h3 className="text-white text-lg font-semibold font-roboto">
                            {tool.name}
                          </h3>
                          <p className="text-[#ffffff80] text-sm mt-1 line-clamp-2 font-roboto">
                            {tool.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
              </div>
            </div>
            <button
              onClick={() => handleScroll('Development', 'left')} // Corrected category case
              className="absolute -left-5 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-[#ffffff20] border border-white/20 shadow-lg transition-all duration-300 z-10 hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:bg-[#ffffff30]"
              style={{ display: scrollPosition.Development === 0 ? "none" : "block" }}
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-white/80 text-sm" />
            </button>
            <button
              onClick={() => handleScroll('Development', 'right')} // Corrected category case
              className="absolute -right-5 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-[#ffffff20] border border-white/20 shadow-lg transition-all duration-300 z-10 hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:bg-[#ffffff30]"
              style={{
                display: (() => {
                  if (!isClient) return 'none';
                  const developmentTools = tools.filter((t) => t.category === 'Development');
                  const itemWidth = 280;
                  const gap = 24;
                  const containerWidth = window.innerWidth > 1280 ? 1280 - 64 : window.innerWidth - 32;
                  const itemsPerView = Math.floor(containerWidth / (itemWidth + gap));
                  const maxScroll = Math.max(0, (developmentTools.length - itemsPerView) * (itemWidth + gap));
                  return scrollPosition.Development >= maxScroll ? 'none' : 'block';
                })(),
              }}
            >
              <FontAwesomeIcon icon={faChevronRight} className="text-white/80 text-sm" />
            </button>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl text-white font-roboto mb-6">
            Editor's Picks
          </h2>
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tools
                .filter((tool) => tool.editor_pick)
                .slice(0, showAllEditorPicks ? 6 : 4)
                .map((tool, index) => (
                  <a
                    key={index}
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative h-[220px] rounded-t-2xl group cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                  >
                    {tool.isNew && (
                      <div className="absolute top-3 left-3 z-10">
                        <span className="bg-[#FF0000] text-white text-xs font-bold px-3 py-1.5 rounded-md">
                          NEW
                        </span>
                      </div>
                    )}
                    <img
                      src={tool.image}
                      alt={tool.name}
                      className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-300 rounded-t-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000cc] to-transparent group-hover:via-[#000000b3] transition-all duration-300 rounded-t-2xl">
                      <div className="absolute bottom-0 left-0 right-0 p-5 transform transition-all duration-300 group-hover:translate-y-[-4px]">
                        <div className="mb-2">
                          <span className="text-[#5FFAC6] text-sm font-medium">
                            {tool.category}
                          </span>
                        </div>
                        <h3 className="text-white text-lg font-semibold font-roboto">
                          {tool.name}
                        </h3>
                        <p className="text-[#ffffff80] text-sm mt-1 line-clamp-2 font-roboto">
                          {tool.description}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
            </div>
            {!showAllEditorPicks &&
              tools.filter((t) => t.editor_pick).length > 4 && (
                <div className="relative mt-6">
                  <div className="absolute inset-x-0 bottom-0 h-[220px] bg-gradient-to-t from-[#000000] via-[#000000cc] to-transparent pointer-events-none"></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-30">
                    {tools
                      .filter((t) => t.editor_pick)
                      .slice(4, 6)
                      .map((tool, index) => (
                        <div
                          key={index}
                          className="relative h-[80px] rounded-t-2xl overflow-hidden"
                        >
                          <img
                            src={tool.image}
                            alt={tool.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                  </div>
                </div>
              )}
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowAllEditorPicks(!showAllEditorPicks)}
                className="px-6 py-2 rounded-full bg-[#ffffff15] text-white font-medium hover:bg-[#ffffff20] transition-all duration-300 font-roboto"
              >
                {showAllEditorPicks ? "View Less" : "Load More"}
              </button>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 id="mainstream" className="text-2xl text-white font-roboto mb-6">Mainstream</h2>
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 gap-6"
                style={{ transform: `translateX(-${scrollPosition.Mainstream}px)` }}
              >
                {tools
                  .filter((tool) => tool.category === "Mainstream")
                  .map((tool, index) => (
                    <a
                      key={index}
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-[280px] flex-shrink-0 h-[220px] rounded-2xl group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      {tool.isNew && (
                        <div className="absolute top-3 left-3 z-10">
                          <span className="bg-[#FF0000] text-white text-xs font-bold px-3 py-1.5 rounded-md">
                            NEW
                          </span>
                        </div>
                      )}
                      <img
                        src={tool.image}
                        alt={tool.name}
                        className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-300 rounded-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#00000090] to-transparent group-hover:via-[#00000070] transition-all duration-300 rounded-2xl">
                        <div className="absolute bottom-0 left-0 right-0 p-5 transform transition-all duration-300 group-hover:translate-y-[-4px]">
                          <h3 className="text-white text-lg font-semibold font-roboto">
                            {tool.name}
                          </h3>
                          <p className="text-[#ffffff80] text-sm mt-1 line-clamp-2 font-roboto">
                            {tool.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
              </div>
            </div>
            <button
              onClick={() => handleScroll('Mainstream', 'left')} // Corrected category case
              className="absolute -left-5 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-[#ffffff20] border border-white/20 shadow-lg transition-all duration-300 z-10 hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:bg-[#ffffff30]"
              style={{ display: scrollPosition.Mainstream === 0 ? "none" : "block" }}
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-white/80 text-sm" />
            </button>
            <button
              onClick={() => handleScroll('Mainstream', 'right')} // Corrected category case
              className="absolute -right-5 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-[#ffffff20] border border-white/20 shadow-lg transition-all duration-300 z-10 hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:bg-[#ffffff30]"
              style={{
                display: (() => {
                  if (!isClient) return 'none';
                  const MainstreamTools = tools.filter((t) => t.category === 'Mainstream');
                  const itemWidth = 280;
                  const gap = 24;
                  const containerWidth = window.innerWidth > 1280 ? 1280 - 64 : window.innerWidth - 32;
                  const itemsPerView = Math.floor(containerWidth / (itemWidth + gap));
                  const maxScroll = Math.max(0, (MainstreamTools.length - itemsPerView) * (itemWidth + gap));
                  return scrollPosition.Mainstream >= maxScroll ? 'none' : 'block';
                })(),
              }}
            >
              <FontAwesomeIcon icon={faChevronRight} className="text-white/80 text-sm" />
            </button>
          </div>
        </div>

        <div className="mb-16">
          <h2 id="productivity" className="text-2xl text-white font-roboto mb-6">Productivity</h2>
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 gap-6"
                style={{ transform: `translateX(-${scrollPosition.Productivity}px)` }}
              >
                {tools
                  .filter((tool) => tool.category === "Productivity")
                  .map((tool, index) => (
                    <a
                      key={index}
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-[280px] flex-shrink-0 h-[220px] rounded-2xl group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      {tool.isNew && (
                        <div className="absolute top-3 left-3 z-10">
                          <span className="bg-[#FF0000] text-white text-xs font-bold px-3 py-1.5 rounded-md">
                            NEW
                          </span>
                        </div>
                      )}
                      <img
                        src={tool.image}
                        alt={tool.name}
                        className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-300 rounded-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#00000090] to-transparent group-hover:via-[#00000070] transition-all duration-300 rounded-2xl">
                        <div className="absolute bottom-0 left-0 right-0 p-5 transform transition-all duration-300 group-hover:translate-y-[-4px]">
                          <h3 className="text-white text-lg font-semibold font-roboto">
                            {tool.name}
                          </h3>
                          <p className="text-[#ffffff80] text-sm mt-1 line-clamp-2 font-roboto">
                            {tool.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
              </div>
            </div>
            <button
              onClick={() => handleScroll('Productivity', 'left')} // Corrected category case
              className="absolute -left-5 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-[#ffffff20] border border-white/20 shadow-lg transition-all duration-300 z-10 hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:bg-[#ffffff30]"
              style={{ display: scrollPosition.Productivity === 0 ? "none" : "block" }}
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-white/80 text-sm" />
            </button>
            <button
              onClick={() => handleScroll('Productivity', 'right')} // Corrected category case
              className="absolute -right-5 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-[#ffffff20] border border-white/20 shadow-lg transition-all duration-300 z-10 hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:bg-[#ffffff30]"
              style={{
                display: (() => {
                  if (!isClient) return 'none';
                  const productivityTools = tools.filter((t) => t.category === 'Productivity');
                  const itemWidth = 280;
                  const gap = 24;
                  const containerWidth = window.innerWidth > 1280 ? 1280 - 64 : window.innerWidth - 32;
                  const itemsPerView = Math.floor(containerWidth / (itemWidth + gap));
                  const maxScroll = Math.max(0, (productivityTools.length - itemsPerView) * (itemWidth + gap));
                  return scrollPosition.Productivity >= maxScroll ? 'none' : 'block';
                })(),
              }}
            >
              <FontAwesomeIcon icon={faChevronRight} className="text-white/80 text-sm" />
            </button>
          </div>
        </div>

        <div className="mb-16">
          <h2 id="programming" className="text-2xl text-white font-roboto mb-6">Programming</h2>
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 gap-6"
                style={{ transform: `translateX(-${scrollPosition.Programming}px)` }}
              >
                {tools
                  .filter((tool) => tool.category === "Programming")
                  .map((tool, index) => (
                    <a
                      key={index}
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-[280px] flex-shrink-0 h-[220px] rounded-2xl group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      {tool.isNew && (
                        <div className="absolute top-3 left-3 z-10">
                          <span className="bg-[#FF0000] text-white text-xs font-bold px-3 py-1.5 rounded-md">
                            NEW
                          </span>
                        </div>
                      )}
                      <img
                        src={tool.image}
                        alt={tool.name}
                        className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-300 rounded-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#00000090] to-transparent group-hover:via-[#00000070] transition-all duration-300 rounded-2xl">
                        <div className="absolute bottom-0 left-0 right-0 p-5 transform transition-all duration-300 group-hover:translate-y-[-4px]">
                          <h3 className="text-white text-lg font-semibold font-roboto">
                            {tool.name}
                          </h3>
                          <p className="text-[#ffffff80] text-sm mt-1 line-clamp-2 font-roboto">
                            {tool.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
              </div>
            </div>
            <button
              onClick={() => handleScroll('Programming', 'left')} // Corrected category case
              className="absolute -left-5 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-[#ffffff20] border border-white/20 shadow-lg transition-all duration-300 z-10 hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:bg-[#ffffff30]"
              style={{ display: scrollPosition.Programming === 0 ? "none" : "block" }}
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-white/80 text-sm" />
            </button>
            <button
              onClick={() => handleScroll('Programming', 'right')} // Corrected category case
              className="absolute -right-5 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-[#ffffff20] border border-white/20 shadow-lg transition-all duration-300 z-10 hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:bg-[#ffffff30]"
              style={{
                display: (() => {
                  if (!isClient) return 'none';
                  const ProgrammingTools = tools.filter((t) => t.category === 'Programming');
                  const itemWidth = 280;
                  const gap = 24;
                  const containerWidth = window.innerWidth > 1280 ? 1280 - 64 : window.innerWidth - 32;
                  const itemsPerView = Math.floor(containerWidth / (itemWidth + gap));
                  const maxScroll = Math.max(0, (ProgrammingTools.length - itemsPerView) * (itemWidth + gap));
                  return scrollPosition.Programming >= maxScroll ? 'none' : 'block';
                })(),
              }}
            >
              <FontAwesomeIcon icon={faChevronRight} className="text-white/80 text-sm" />
            </button>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl text-white font-roboto mb-6">
            New Additions
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {tools
              .filter((tool) => tool.isNew)
              .slice(0, 12)
              .map((tool, index) => (
                <a
                  key={index}
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col w-full cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                    {tool.isNew && (
                      <div className="absolute top-3 left-3 z-10">
                        <span className="bg-[#FF0000] text-white text-xs font-bold px-3 py-1.5 rounded-md">
                          NEW
                        </span>
                      </div>
                    )}
                    <img
                      src={tool.image}
                      alt={tool.name}
                      className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-300"
                    />
                  </div>
                  <div className="mt-4 px-2">
                    <h3 className="text-white text-lg font-semibold font-roboto mb-2">
                      {tool.name}
                    </h3>
                    <p className="text-[#ffffff80] text-sm font-roboto line-clamp-2">
                      {tool.category}
                    </p>
                  </div>
                </a>
              ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 id="content-creation" className="text-2xl text-white font-roboto mb-6">Content Creation</h2>
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 gap-6"
                style={{ transform: `translateX(-${scrollPosition.ContentCreation}px)` }}
              >
                {tools
                  .filter((tool) => tool.category === "ContentCreation")
                  .map((tool, index) => (
                    <a
                      key={index}
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-[280px] flex-shrink-0 h-[220px] rounded-2xl group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      {tool.isNew && (
                        <div className="absolute top-3 left-3 z-10">
                          <span className="bg-[#FF0000] text-white text-xs font-bold px-3 py-1.5 rounded-md">
                            NEW
                          </span>
                        </div>
                      )}
                      <img
                        src={tool.image}
                        alt={tool.name}
                        className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-300 rounded-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#00000090] to-transparent group-hover:via-[#00000070] transition-all duration-300 rounded-2xl">
                        <div className="absolute bottom-0 left-0 right-0 p-5 transform transition-all duration-300 group-hover:translate-y-[-4px]">
                          <h3 className="text-white text-lg font-semibold font-roboto">
                            {tool.name}
                          </h3>
                          <p className="text-[#ffffff80] text-sm mt-1 line-clamp-2 font-roboto">
                            {tool.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
              </div>
            </div>
            <button
              onClick={() => handleScroll('ContentCreation', 'left')} // Corrected category case
              className="absolute -left-5 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-[#ffffff20] border border-white/20 shadow-lg transition-all duration-300 z-10 hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:bg-[#ffffff30]"
              style={{ display: scrollPosition.ContentCreation === 0 ? "none" : "block" }}
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-white/80 text-sm" />
            </button>
            <button
              onClick={() => handleScroll('ContentCreation', 'right')} // Corrected category case
              className="absolute -right-5 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-[#ffffff20] border border-white/20 shadow-lg transition-all duration-300 z-10 hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:bg-[#ffffff30]"
              style={{
                display: (() => {
                  if (!isClient) return 'none';
                  const ContentCreationTools = tools.filter((t) => t.category === 'ContentCreation');
                  const itemWidth = 280;
                  const gap = 24;
                  const containerWidth = window.innerWidth > 1280 ? 1280 - 64 : window.innerWidth - 32;
                  const itemsPerView = Math.floor(containerWidth / (itemWidth + gap));
                  const maxScroll = Math.max(0, (ContentCreationTools.length - itemsPerView) * (itemWidth + gap));
                  return scrollPosition.ContentCreation >= maxScroll ? 'none' : 'block';
                })(),
              }}
            >
              <FontAwesomeIcon icon={faChevronRight} className="text-white/80 text-sm" />
            </button>
          </div>
        </div>

        <div className="mb-16">
          <h2 id="miscellaneous" className="text-2xl text-white font-roboto mb-6">Miscellaneous</h2>
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 gap-6"
                style={{ transform: `translateX(-${scrollPosition.Miscellaneous}px)` }}
              >
                {tools
                  .filter((tool) => tool.category === "Miscellaneous")
                  .map((tool, index) => (
                    <a
                      key={index}
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-[280px] flex-shrink-0 h-[220px] rounded-2xl group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      {tool.isNew && (
                        <div className="absolute top-3 left-3 z-10">
                          <span className="bg-[#FF0000] text-white text-xs font-bold px-3 py-1.5 rounded-md">
                            NEW
                          </span>
                        </div>
                      )}
                      <img
                        src={tool.image}
                        alt={tool.name}
                        className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-300 rounded-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#00000090] to-transparent group-hover:via-[#00000070] transition-all duration-300 rounded-2xl">
                        <div className="absolute bottom-0 left-0 right-0 p-5 transform transition-all duration-300 group-hover:translate-y-[-4px]">
                          <h3 className="text-white text-lg font-semibold font-roboto">
                            {tool.name}
                          </h3>
                          <p className="text-[#ffffff80] text-sm mt-1 line-clamp-2 font-roboto">
                            {tool.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
              </div>
            </div>
            <button
              onClick={() => handleScroll('Miscellaneous', 'left')} // Corrected category case
              className="absolute -left-5 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-[#ffffff20] border border-white/20 shadow-lg transition-all duration-300 z-10 hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:bg-[#ffffff30]"
              style={{ display: scrollPosition.Miscellaneous === 0 ? "none" : "block" }}
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-white/80 text-sm" />
            </button>
            <button
              onClick={() => handleScroll('Miscellaneous', 'right')} // Corrected category case
              className="absolute -right-5 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-[#ffffff20] border border-white/20 shadow-lg transition-all duration-300 z-10 hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:bg-[#ffffff30]"
              style={{
                display: (() => {
                  if (!isClient) return 'none';
                  const MiscellaneousTools = tools.filter((t) => t.category === 'Miscellaneous');
                  const itemWidth = 280;
                  const gap = 24;
                  const containerWidth = window.innerWidth > 1280 ? 1280 - 64 : window.innerWidth - 32;
                  const itemsPerView = Math.floor(containerWidth / (itemWidth + gap));
                  const maxScroll = Math.max(0, (MiscellaneousTools.length - itemsPerView) * (itemWidth + gap));
                  return scrollPosition.Miscellaneous >= maxScroll ? 'none' : 'block';
                })(),
              }}
            >
              <FontAwesomeIcon icon={faChevronRight} className="text-white/80 text-sm" />
            </button>
          </div>
        </div>
      </div>

      <footer className="w-full bg-[#ffffff08] backdrop-blur-sm px-8 py-12 border-t border-[#ffffff15] mt-16">
        <div className="max-w-[1920px] mx-auto flex flex-col items-center">
          <div className="flex items-center mb-8">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#5FFAC6] to-[#4DE6B4] rounded-full blur opacity-30"></div>
              <FontAwesomeIcon icon={faRobot} className="relative text-[#5FFAC6] text-2xl mr-3" />
            </div>
            <h2 className="text-3xl text-white font-orbitron bg-gradient-to-r from-[#ffffff] to-[#ffffff80] bg-clip-text text-transparent">
              SeekAnAI
            </h2>
          </div>
          <div className="flex space-x-8 mb-4">
            <a
              href="/terms"
              className="text-[#ffffff80] hover:text-white transition-colors duration-300 font-roboto"
            >
              Terms & Conditions
            </a>
            <a
              href="/privacy"
              className="text-[#ffffff80] hover:text-white transition-colors duration-300 font-roboto"
            >
              Privacy Policy
            </a>
          </div>
          <p className="text-sm text-[#ffffff60] font-roboto">
            Seek An AI Copyright 2025. All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

export default MainComponent;