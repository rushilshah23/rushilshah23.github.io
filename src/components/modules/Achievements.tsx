import { Achievement, achievements } from '@/src/data/achievements';
import React from 'react';

interface AchievementsProps {
    // achievements:Achievement[]
}

const Achievements: React.FC<AchievementsProps> = ({}) => {
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Title</th>
                            <th className="px-4 py-2">Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {achievements.map((item, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-bgColor2' : ''}>
                                <td className="border px-4 py-2">{item.title}</td>
                                <td className="border px-4 py-2">
                                    {item.link ? (
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href={item.link}
                                            className="text-fontColor7 font-semibold hover:underline"
                                        >
                                            {item.tag}
                                        </a>
                                    ) : (
                                        item.tag
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Achievements;
