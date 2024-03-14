import type { FC } from 'react';

interface Props {
  language: string;
  onChange: (language: string) => void;
}

export const LanguageSelect: FC<Props> = ({ language, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <select
      className="w-full rounded-md bg-[#1F2937] px-4 py-2 text-neutral-200"
      value={language}
      onChange={handleChange}
    >
      {languages
        .sort((a, b) => a.label.localeCompare(b.label))
        .map((language) => (
          <option key={language.value} value={language.value}>
            {language.label}
          </option>
        ))}
    </select>
  );
};

const languages = [
  { value: 'English', label: 'English' },
  { value: 'Spanish', label: 'Spanish' },
  { value: 'Mandarin', label: 'Mandarin' },
  { value: 'French', label: 'French' },
  { value: 'German', label: 'German' },
  { value: 'Russian', label: 'Russian' },
  { value: 'Japanese', label: 'Japanese' },
  { value: 'Korean', label: 'Korean' },
  { value: 'Italian', label: 'Italian' },
  { value: 'Portuguese', label: 'Portuguese' },
  { value: 'Arabic', label: 'Arabic' },
  { value: 'Hindi', label: 'Hindi' },
  { value: 'Bengali', label: 'Bengali' },
  { value: 'Urdu', label: 'Urdu' },
  { value: 'Indonesian', label: 'Indonesian' },
  { value: 'Turkish', label: 'Turkish' },
  { value: 'Vietnamese', label: 'Vietnamese' },
  { value: 'Persian', label: 'Persian' },
  { value: 'Dutch', label: 'Dutch' },
  { value: 'Polish', label: 'Polish' },
  { value: 'Thai', label: 'Thai' },
  { value: 'Greek', label: 'Greek' },
  { value: 'Hebrew', label: 'Hebrew' },
  { value: 'Swedish', label: 'Swedish' },
  { value: 'Romanian', label: 'Romanian' },
  { value: 'Hungarian', label: 'Hungarian' },
  { value: 'Danish', label: 'Danish' },
  { value: 'Finnish', label: 'Finnish' },
  { value: 'Slovak', label: 'Slovak' },
  { value: 'Norwegian', label: 'Norwegian' },
  { value: 'Czech', label: 'Czech' },
  { value: 'Bulgarian', label: 'Bulgarian' },
  { value: 'Serbian', label: 'Serbian' },
  { value: 'Croatian', label: 'Croatian' },
  { value: 'Lithuanian', label: 'Lithuanian' },
  { value: 'Latvian', label: 'Latvian' },
  { value: 'Estonian', label: 'Estonian' },
  { value: 'Slovenian', label: 'Slovenian' },
  { value: 'Malay', label: 'Malay' },
  { value: 'Filipino', label: 'Filipino' },
  { value: 'Swahili', label: 'Swahili' },
  { value: 'Zulu', label: 'Zulu' },
  { value: 'Xhosa', label: 'Xhosa' },
  { value: 'Yoruba', label: 'Yoruba' },
  { value: 'Igbo', label: 'Igbo' },
  { value: 'Amharic', label: 'Amharic' },
  { value: 'Nepali', label: 'Nepali' },
  { value: 'Mongolian', label: 'Mongolian' },
  { value: 'Armenian', label: 'Armenian' },
  { value: 'Georgian', label: 'Georgian' },
  { value: 'Kazakh', label: 'Kazakh' },
  { value: 'Uzbek', label: 'Uzbek' },
  { value: 'Tajik', label: 'Tajik' },
  { value: 'Azerbaijani', label: 'Azerbaijani' },
  { value: 'Turkmen', label: 'Turkmen' },
  { value: 'Kyrgyz', label: 'Kyrgyz' },
  { value: 'Pashto', label: 'Pashto' },
  { value: 'Sindhi', label: 'Sindhi' },
  { value: 'Punjabi', label: 'Punjabi' },
  { value: 'Tamil', label: 'Tamil' },
  { value: 'Telugu', label: 'Telugu' },
  { value: 'Kannada', label: 'Kannada' },
  { value: 'Malayalam', label: 'Malayalam' },
  { value: 'Sinhala', label: 'Sinhala' },
  { value: 'Khmer', label: 'Khmer' },
  { value: 'Lao', label: 'Lao' },
  { value: 'Burmese', label: 'Burmese' },
  { value: 'Kurdish', label: 'Kurdish' },
  { value: 'Somali', label: 'Somali' },
];
