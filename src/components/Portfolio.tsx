// components/Portfolio.tsx
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { SuccessStory } from "@/types";

type Props = {
  stories: SuccessStory[];
  onOpenCaseStudy: (story: SuccessStory) => void;
};

export default function Portfolio({ stories, onOpenCaseStudy }: Props) {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Recent Success Stories
          </h2>
          <p className="text-xl text-gray-600">
            {
              "Discover how we've helped businesses transform through technology"
            }
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <Image
                src={story.imageUrl}
                alt={story.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {story.title}
                  </h3>
                  <div className="flex space-x-2">
                    {story.stats.slice(0, 1).map((stat, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded"
                      >
                        {stat.value}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-blue-600 font-medium mb-3">
                  {story.subtitle}
                </p>

                <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                  {story.challenge}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">
                    Key Results:
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {story.keyResults.slice(0, 2).map((result, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="line-clamp-2">{result}</span>
                      </li>
                    ))}
                    {story.keyResults.length > 2 && (
                      <li className="text-blue-600 text-xs">
                        +{story.keyResults.length - 2} more achievements
                      </li>
                    )}
                  </ul>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-4">
                  {story.stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-sm font-bold text-blue-600">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => onOpenCaseStudy(story)}
                  className="w-full text-blue-600 font-medium hover:text-blue-700 text-sm border border-blue-200 hover:border-blue-300 rounded-lg py-2 transition-colors cursor-pointer hover:bg-blue-100"
                >
                  View Full Case Study →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
