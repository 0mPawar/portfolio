import Icon from "../common/Icon";

function SkillCard({ skill }) {
  return (
    <article className="group rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.03]">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
        <Icon
          name={skill.icon}
          size={28}
        />
      </div>

      <h3 className="mt-5 text-lg font-bold text-gray-900 dark:text-white">
        {skill.name}
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
        {skill.description}
      </p>
    </article>
  );
}

export default SkillCard;