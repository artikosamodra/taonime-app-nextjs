const AnimeInfo = ({ subInfo, fetchInfo }) => {
  return (
    <section>
      <div>
        <table>
          <tbody>
            <tr className="text-left">
              <th className="w-40">{subInfo}</th>
              <td> : </td>
              <td className="w-40 text-">{fetchInfo}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AnimeInfo;
